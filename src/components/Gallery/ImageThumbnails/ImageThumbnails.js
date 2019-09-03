import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'components/Gallery/Image/Image';

import LazyLoad from 'react-lazy-load';

class ImageThumbnails extends React.Component {
  renderImageThumbnails() {
    const { chooseImage, ids } = this.props;
    const imageThumbnails = ids.map(imageId => {
      return (
        <LazyLoad debounce={false} key={imageId} className="image-thumbnail">
          <Image
            id={imageId}
            thumbnail
            onClick={() => chooseImage(imageId)}
            onKeyPress={() => chooseImage(imageId)}
          />
        </LazyLoad>
      );
    });

    return <div className="image-grid">{imageThumbnails}</div>;
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return <FontAwesomeIcon icon="spinner" className="icon" size="3x" spin />;
    }
    return this.renderImageThumbnails();
  }
}

ImageThumbnails.defaultProps = {
  ids: [],
};

ImageThumbnails.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool.isRequired,
  chooseImage: PropTypes.func.isRequired,
};

export default ImageThumbnails;
