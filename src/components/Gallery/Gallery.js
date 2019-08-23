import React from 'react';
import './Gallery.scss';

import axios from 'axios';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      chosenImage: '',
      chosenImageLoading: true
    }
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/galleryall');
      if (res.statusText === 'OK') {
        const imageData = res.data.map((image) => {
          const imageThumbnailStr = this.arrayBufferToBase64Src(image.imgThumbnail.data.data);
          return {
            id: image._id,
            image: '',
            imageThumbnail: imageThumbnailStr,
            requestingFullImage: false
          }
        });

        if (imageData.length === 0) {
          this.setState({ images: [] });
          return;
        }

        this.requestFullImage(imageData[0].id);
        this.setState({
          images: imageData,
          chosenImage: imageData[0].id
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  arrayBufferToBase64Src(buffer) {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach(b => binary += String.fromCharCode(b));
    const str = window.btoa(binary);
    const base64Flag = 'data:image/jpeg;base64,';
    return base64Flag + str;
  }

  chooseImage(id) {
    const image = this.state.images.find((image) => image.id === id);
    if (image.image === '' && !image.requestingFullImage) {
      this.requestFullImage(image.id);
    }
    this.setState({ chosenImage: image.id });
  }

  renderChosenImage() {
    const image = this.state.images.find((image) => image.id === this.state.chosenImage);
    if (!image) {
      return null;
    }
    if (image.image === '') {
      return (
        <i className='fas fa-spinner fa-3x fa-spin'></i>
      )
    } else {
      return (
        <img src={image.image} alt='' />
      );
    }
  }

  renderImageThumbnails() {
    const images = this.state.images.map(image => {
      return (
        <img
          className='image-thumbnail'
          src={image.imageThumbnail}
          alt=''
          key={image.id}
          onClick={() => this.chooseImage(image.id)}
        />
      );
    });
    return images;
  }

  async requestFullImage(id) {
    try {
      this.setState({
        image: this.state.images.map((image) => {
          if (image.id === id) {
            image.requestingFullImage = true;
          }
          return image;
        })
      });
      const res = await axios.get('/api/gallery/' + id);
      if (res.statusText === 'OK') {
        const imageStr = this.arrayBufferToBase64Src(res.data.img.data.data);
        const newImages = this.state.images.map((image) => {
          if (image.id === id) {
            image.image = imageStr;
            image.requestingFullImage = false;
          }
          return image;
        });
        this.setState({
          images: newImages,
          chosenImageLoading: false
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className='gallery'>
        <div className='image-chosen'>
          {this.renderChosenImage()}
        </div>
        <div className='image-grid'>
          {this.renderImageThumbnails()}
        </div>
      </div>
    );
  }
}

export default Gallery;