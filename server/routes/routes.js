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
const fs = require('fs');
const Img = require('../models/img');

router.post('/gallery', upload.single('image'), (req, res) => {
  const newImg = new Img;
  newImg.img.data = fs.readFileSync(req.file.path);
  newImg.img.contentType = 'image/jpeg';
  newImg.save();
  
  fs.unlink(req.file.path, (err) => {
    if (err) {
      console.log(err);
    }
  })

  res.json({
    message: 'New image added to the db!'
  });
  console.log('POST /gallery');
});

router.get('/gallery', (req, res, ) => {
  Img.findOne({}, 'img createdAt', (err, img) => {
    if (err) {
      res.send(err);
    }
    res.contentType('json');
    res.send(img);
    console.log('GET /gallery : ' + img._id);
  }).sort({ createdAt: 'desc' });
});

module.exports = router;