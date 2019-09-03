import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { arrayBufferToBase64Src } from 'utils/Utils';

import axios from 'axios';

const Image = ({ id, onClick, thumbnail }) => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState('');

  useEffect(() => {
    const getImage = async () => {
      try {
        setLoading(true);
        setImage('');
        const res = await axios.get(`/api/gallery/${id}?thumbnail=${thumbnail}`);
        if (res.statusText === 'OK') {
          const imageType = thumbnail ? 'imgThumbnail' : 'img';
          const imageData = res.data[imageType].data.data;
          setLoading(false);
          setImage(arrayBufferToBase64Src(imageData));
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (id !== '') {
      getImage();
    }
  }, [id, thumbnail]);

  if (loading) {
    return <FontAwesomeIcon icon="spinner" className="icon" size="3x" spin />;
  }
  return (
    <div
      className="image-container"
      onClick={onClick}
      onKeyPress={onClick}
      role="menuitem"
      tabIndex="0"
    >
      <img src={image} alt="" />
    </div>
  );
};

Image.defaultProps = {
  id: '',
  thumbnail: false,
  onClick: () => {},
};

Image.propTypes = {
  id: PropTypes.string,
  thumbnail: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Image;
