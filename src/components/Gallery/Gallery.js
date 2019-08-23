import React from 'react';
import './Gallery.scss';

import axios from 'axios';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/galleryall');
      if (res.statusText === 'OK') {
        const imageData = res.data.map((image) => {
          const imageThumbnailStr = this.arrayBufferToBase64Src(image.imgThumbnail.data.data);
          return { id: image._id, image: '', imageThumbnail: imageThumbnailStr}
        });
        this.setState({ images: imageData });
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

  renderImageThumbnails() {
    const images = this.state.images.map(image => {
      return (
        <img className='image-thumbnail' src={image.imageThumbnail} alt='' key={image.id} />
      );
    })
    return images;
  }

  render() {
    return (
      <div className='gallery'>
        <div className='image-chosen'>

        </div>
        <div className='image-grid'>
          {this.renderImageThumbnails()}
        </div>
      </div>
    );
  }
}

export default Gallery;