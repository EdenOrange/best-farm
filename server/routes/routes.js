const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, './../gallery'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });
const imageSize = require('image-size');
const sharp = require('sharp');
const fs = require('fs');
const Img = require('../models/img');

router.post('/gallery', upload.single('image'), (req, res) => {
  const newImg = new Img;
  newImg.img.data = fs.readFileSync(req.file.path);
  newImg.img.contentType = 'image/jpeg';
  const dimensions = imageSize(newImg.img.data);
  newImg.imgThumbnail.contentType = 'image/jpeg';
  sharp(newImg.img.data)
    .resize({
      width: Math.round(0.1 * dimensions.width),
      height: Math.round(0.1 * dimensions.height)
    })
    .toBuffer()
    .then((data) => {
      newImg.imgThumbnail.data = data;
      newImg.save();
      // Delete upload image file from storage
      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.log(err);
        }
      })
    })
    .catch((err) => {
      console.log(err);
    });

  res.json({
    message: 'New image added to the db!'
  });
  console.log('POST /gallery');
});

router.get('/gallery', (req, res, ) => {
  Img.find({}, '_id imgThumbnail', (err, docs) => {
    if (err) {
      res.send(err);
    }
    res.contentType('json');
    res.send(docs);
    console.log('GET /gallery')
  }).sort({ createdAt: 'desc' });
})

router.get('/gallery/:id', (req, res, ) => {
  Img.findOne({ _id: req.params.id }, 'img', (err, img) => {
    if (err) {
      res.send(err);
    }
    res.contentType('json');
    res.send(img);
    console.log('GET /gallery/ : ' + img._id);
  });
});

module.exports = router;