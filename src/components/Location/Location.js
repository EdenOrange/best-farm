import React from 'react';
import './Location.scss';

const Location = () => {
  return (
    <section className="location">
      <h2>Lokasi</h2>
      <h4>Jl. Murai Dalam RT 34 RW 11</h4>
      <h5>Desa Aik Rayak</h5>
      <h5>Tanjung Pandan - Belitung</h5>
      <iframe
        className="map"
        title="Best Farm Map Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22544.186219730254!2d107.68551566626928!3d-2.731034073037507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e173dd40e51c9d3%3A0xa6727c034fa843a9!2sBestfarm+hydroponics!5e0!3m2!1sen!2sid!4v1566289545498!5m2!1sen!2sid"
        frameBorder="0"
        allowFullScreen
      />
    </section>
  );
};

export default Location;
