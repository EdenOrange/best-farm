import React from 'react';
import './Contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <section className='contact'>
        <h2>Hubungi Kami</h2>
        <a href='https://api.whatsapp.com/send?phone=6281929541822&text=Halo, mau tanya-tanya tentang bestfarm dong' className='whatsapp' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-whatsapp fa-2x'></i><span>0819 2954 1822</span>
        </a>
        <div className='media'>
        <a href='https://www.facebook.com/bestfarm.bestfarm.7' className='facebook' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-facebook-f fa-2x'></i><span>bestfarm</span>
        </a>
        <a href='https://www.instagram.com/bestfarmbelitung/' className='instagram' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-instagram fa-2x'></i><span>bestfarmbelitung</span>
        </a>
        </div>
      </section>
    );
  }
}

export default Contact;