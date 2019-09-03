import React from 'react';
import './Gallery.scss';
import axios from 'axios';

import Image from './Image/Image';
import ImageThumbnails from './ImageThumbnails/ImageThumbnails';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIds: [],
      chosenImageId: '',
      loading: true,
    };
    this.chooseImage = this.chooseImage.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/gallery');
      if (res.statusText === 'OK') {
        const imageIds = res.data.map(imageId => imageId._id);
        this.setState({
          imageIds,
          chosenImageId: imageIds.length > 0 ? imageIds[0] : '',
          loading: false,
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
    const { chosenImageId, imageIds, loading } = this.state;
    return (
      <div className="gallery">
        <div className="image-chosen-container">
          <Image id={chosenImageId} />
        </div>
        <div className="gallery-divider" />
        <div className="image-thumbnails-container">
          <ImageThumbnails ids={imageIds} loading={loading} chooseImage={this.chooseImage} />
        </div>
      </div>
    );
  }
}

export default Gallery;
