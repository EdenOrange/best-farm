import React from 'react';
import './Gallery.scss';

import Image from './Image/Image';
import ImageThumbnails from './ImageThumbnails/ImageThumbnails';

import axios from 'axios';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIds: [],
      chosenImageId: '',
      loading: true
    }
    this.chooseImage = this.chooseImage.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/gallery');
      if (res.statusText === 'OK') {
        const imageIds = res.data.map(imageId => imageId._id);
        this.setState({ 
          imageIds: imageIds,
          chosenImageId: imageIds.length > 0 ? imageIds[0] : '',
          loading: false
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  chooseImage(id) {
    this.setState({ chosenImageId: id });
  }

  render() {
    return (
      <div className='gallery'>
        <div className='image-chosen-container'>
          <Image id={this.state.chosenImageId} />
        </div>
        <div className='gallery-divider' />
        <div className='image-thumbnails-container'>
          <ImageThumbnails 
            ids={this.state.imageIds} 
            loading={this.state.loading} 
            chooseImage={this.chooseImage}
          />
        </div>
      </div>
    );
  }
}

export default Gallery;