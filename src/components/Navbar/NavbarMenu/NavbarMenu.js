import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavbarMenu.scss';

const MOBILE_WIDTH = parseInt(styles['mobile-width'], 10);

class NavbarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Gallery',
          path: '/gallery/',
        },
      ],
      headerNode: null,
      mobileMenu: window.innerWidth < MOBILE_WIDTH,
      isMenuOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.closeMenu.bind(this));
    window.addEventListener('click', this.closeMenu.bind(this));
    this.setState({
      headerNode: document.getElementById('header'),
    });
  }

  componentDidUpdate(prevProps) {
    const { isMenuOpen } = this.state;
    const { location } = this.props;
    const { location: prevLocation } = prevProps;
    if (isMenuOpen && location.pathname !== prevLocation.pathname) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isMenuOpen: false });
    }
  }

  toggleMenu() {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  }

  closeMenu(event) {
    const { headerNode, isMenuOpen } = this.state;
    if (event.type === 'click') {
      const clickedOutsideHeader = !headerNode.contains(event.target);
      if (isMenuOpen && clickedOutsideHeader) {
        this.setState({ isMenuOpen: false });
      }
    }
    this.setState({
      isMenuOpen: isMenuOpen && window.innerWidth < MOBILE_WIDTH,
      mobileMenu: window.innerWidth < MOBILE_WIDTH,
    });
  }

  render() {
    const { isMenuOpen, menuList, mobileMenu } = this.state;
    const menus = menuList.map(menu => {
      return (
        <li key={menu.name}>
          <Link to={menu.path}>{menu.name}</Link>
        </li>
      );
    });
    const menuItemsActive = isMenuOpen || !mobileMenu;
    let menuItemsClassName;
    if (mobileMenu) {
      menuItemsClassName = isMenuOpen ? 'show' : 'hide';
    } else {
      menuItemsClassName = 'desktop';
    }

    return (
      <nav className="navbar-menu">
        <div className="navbar-menu-icon">
          <FontAwesomeIcon
            icon="bars"
            className={menuItemsActive ? 'icon hide' : 'icon show'}
            onClick={this.toggleMenu}
          />
          <FontAwesomeIcon
            icon="times"
            className={menuItemsActive ? 'icon show' : 'icon hide'}
            onClick={this.toggleMenu}
          />
        </div>
        <ul id="menu-items" className={menuItemsClassName}>
          {menus}
        </ul>
      </nav>
    );
  }
}

NavbarMenu.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(NavbarMenu);
