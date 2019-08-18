import React from 'react';
import './Location.scss';

class Location extends React.Component {
  render() {
    return (
      <section className='location'>
        <h2>Lokasi</h2>
        <h4>Jl. Murai Dalam RT 34 RW 11</h4>
        <h5>Desa Aik Rayak</h5>
        <h5>Tanjung Pandan - Belitung</h5>
        <iframe className='map' title='Best Farm Map Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13404.75253067676!2d107.67045826716893!3d-2.74005096469221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNDQnMjAuNiJTIDEwN8KwNDAnMjQuOSJF!5e0!3m2!1sen!2sid!4v1566110898374!5m2!1sen!2sid" 
        frameborder="0" allowfullscreen></iframe>
      </section>
    );
  }
}

export default Location;