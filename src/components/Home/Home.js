import React from 'react';
import './Home.scss';

import Hero from '../Hero/Hero';
import About from '../About/About';
import Location from '../Location/Location';
import Contact from '../Contact/Contact';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <div className='container'>
          <About />
          <Location />
          <Contact />
        </div>
      </div>
    );
  }
}

export default Home;
