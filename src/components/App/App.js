import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Navbar from 'components/Navbar/Navbar';
const Home = lazy(() => import('components/Home/Home'));
const Gallery = lazy(() => import('components/Gallery/Gallery'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        {
          name: 'Home',
          path: '/',
          component: Home
        },
        {
          name: 'Gallery',
          path: '/gallery/',
          component: Gallery
        }
      ]
    }
    library.add(faWhatsapp, faFacebookF, faInstagram, faBars, faTimes, faSpinner);
  }

  renderLoadingScreen() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh'
    };

    return (
      <div style={containerStyle}>
        <FontAwesomeIcon
          icon='spinner'
          className='icon'
          size='3x'
          spin
        />
      </div>
    );
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Suspense fallback={this.renderLoadingScreen()}>
          <Route
            path='/' exact
            render={(props) => <Home {...props} menuList={this.state.menuList} />}
          />
          <Route
            path='/gallery/' exact
            render={(props) => <Gallery {...props} menuList={this.state.menuList} />}
          />
        </Suspense>
        
      </Router>
    );
  }
}

export default App;