import React from 'react';
import './App.scss';

import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import About from '../About/About';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <div className='container'>
          <About />
        </div>
      </div>
    );
  }
}

export default App;
