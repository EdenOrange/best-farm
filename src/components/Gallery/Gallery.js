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

  componentDidMount() {
    axios.get('http://localhost:5000/api/gallery')
      .then((res) => {
        if (res.statusText === 'OK') {
          const base64Flag = 'data:image/jpeg;base64,';
          const imageStr = this.arrayBufferToBase64(res.data.img.data.data);
          this.setState({ images: base64Flag + imageStr });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach(b => binary += String.fromCharCode(b));
    return window.btoa(binary);
  }

  render() {
    return (
      <div>
        <p style={{marginTop: '200px'}}>Gallery</p>
        <img src={this.state.images} alt='' />
      </div>
    );
  }
}

export default Gallery;