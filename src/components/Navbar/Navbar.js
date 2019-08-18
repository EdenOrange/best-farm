import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './Navbar.scss';

import Home from '../Home/Home';
import Gallery from '../Gallery/Gallery';

const MOBILE_WIDTH = parseInt(styles['mobile-width']);

class NavbarMenu extends React.Component {
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
      ],
      menuToggled: false,
      mobileMenu: window.innerWidth < MOBILE_WIDTH
    }
    this.openMenu = this.openMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.closeMenu.bind(this));
  }

  openMenu(event) {
    this.setState({ menuToggled: !this.state.menuToggled });
  }

  closeMenu() {
    this.setState({
      menuToggled: this.state.menuToggled && window.innerWidth < MOBILE_WIDTH,
      mobileMenu: window.innerWidth < MOBILE_WIDTH
    });
  }

  render() {
    const menus = this.state.menuList.map(menu => {
      return (
        <li key={menu.name}><Link to={menu.path}>{menu.name}</Link></li>
      );
    });
  
    return (
      <nav className='navbar-menu'>
        <i className='fas fa-bars fa-lg' onClick={this.openMenu} />
        {(this.state.menuToggled || !this.state.mobileMenu) && (
          <ul>
            {menus}
          </ul>
        )}
      </nav>
    );
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <header className='navbar-container'>
        <NavbarMenu />
      </header>
    );
  }
}

export default Navbar;