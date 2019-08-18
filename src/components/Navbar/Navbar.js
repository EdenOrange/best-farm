import React from 'react';
import { withRouter, Link } from 'react-router-dom';
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
      headerNode: null,
      mobileMenu: window.innerWidth < MOBILE_WIDTH,
      isMenuOpen: false,
    }
    this.openMenu = this.openMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.closeMenu.bind(this));
    window.addEventListener('click', this.closeMenu.bind(this));
    this.setState({
      headerNode: document.getElementById('header')
    });
  }

  componentDidUpdate(prevProps) {
    if (this.state.isMenuOpen && this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ isMenuOpen: false });
    }
  }

  openMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  closeMenu(event) {
    if (event.type === 'click') {
      const clickedOutsideHeader = !this.state.headerNode.contains(event.target);
      if (this.state.isMenuOpen && clickedOutsideHeader){
        this.setState({ isMenuOpen: false });
      }
    }
    this.setState({
      isMenuOpen: this.state.isMenuOpen && window.innerWidth < MOBILE_WIDTH,
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
        {(this.state.isMenuOpen || !this.state.mobileMenu) && (
          <ul id='menu-items'>
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
      <header className='navbar-container' id='header'>
        <NavbarMenu {...this.props} />
      </header>
    );
  }
}

export default withRouter(Navbar);