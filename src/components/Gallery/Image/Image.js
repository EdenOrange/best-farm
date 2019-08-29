import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { arrayBufferToBase64Src } from 'utils/Utils';

import axios from 'axios';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      image: ''
    }
  }

  componentDidMount() {
    if (this.props.id === '') {
      return;
    }

    this.getImage();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id === prevProps.id || this.props.id === '') {
      return;
    }

    this.getImage();
  }

  async getImage(id) {
    try {
      this.setState({ 
        loading: true,
        image: ''
      });
      const res = await axios.get(`/api/gallery/${this.props.id}?thumbnail=${this.props.thumbnail}`);
      if (res.statusText === 'OK') {
        const imageType = this.props.thumbnail ? 'imgThumbnail' : 'img';
        const imageData = res.data[imageType].data.data;
        this.setState({ 
          loading: false,
          image: arrayBufferToBase64Src(imageData) 
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state.loading) {
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
        <img 
          src={this.state.image} 
          alt='' 
          onClick={this.props.onClick}
        />
      );
    }
  }
}

Image.defaultProps = {
  id: '',
  thumbnail: false
}

Image.propTypes = {
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.bool,
  onClick: PropTypes.func
};

export default Image;