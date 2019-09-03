import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';

import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
import Navbar from 'components/Navbar/Navbar';

const Home = lazy(() => import('components/Home/Home'));
const Gallery = lazy(() => import('components/Gallery/Gallery'));

class App extends React.Component {
  constructor(props) {
    super(props);
    library.add(faWhatsapp, faFacebookF, faInstagram, faBars, faTimes, faSpinner);
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Suspense fallback={<LoadingScreen />}>
          <Route path="/" exact component={Home} />
          <Route path="/gallery/" exact component={Gallery} />
        </Suspense>
      </Router>
    );
  }
}

export default App;
