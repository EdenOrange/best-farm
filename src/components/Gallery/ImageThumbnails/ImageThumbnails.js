import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'components/Gallery/Image/Image';

import LazyLoad from 'react-lazy-load';

class ImageThumbnails extends React.Component {
  renderImageThumbnails() {
    const imageThumbnails = this.props.ids.map(imageId => {
      return (
        <LazyLoad 
          debounce={false}
          key={imageId}
          className='image-thumbnail'
        >
          <Image 
            id={imageId} 
            thumbnail={true} 
            onClick={() => this.props.chooseImage(imageId)}
          />
        </LazyLoad>
      );
    });

    return (
      <div className='image-grid'>
        {imageThumbnails}
      </div>
    );
  }

  render() {
    if (this.props.loading) {
      return (
        <FontAwesomeIcon
          icon='spinner'
          className='icon'
          size='3x'
          spin
        />
      );
    } else {
      return (
        this.renderImageThumbnails()
      );
    }
  }
}

ImageThumbnails.defaultProps = {
  ids: [],
  loading: true
}

ImageThumbnails.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
  chooseImage: PropTypes.func
};

export default ImageThumbnails;