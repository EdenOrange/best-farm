import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Gallery from '../Gallery/Gallery';
import Navbar from '../Navbar/Navbar';

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
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Route
          path='/' exact
          render={(props) => <Home {...props} menuList={this.state.menuList} />}
        />
        <Route
          path='/gallery/' exact
          render={(props) => <Gallery {...props} menuList={this.state.menuList} />}
        />
      </Router>
    );
  }
}

export default App;