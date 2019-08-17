import React from 'react';
import './Navbar.scss';
import logo from '../../assets/images/logo.svg';

function NavbarLogo() {
  return (
    <img src={logo} className='navbar-logo' />
  );
}

class NavbarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        {
          name: 'Home',
          href: '#'
        },
        {
          name: 'Gallery',
          href: '#'
        },
        {
          name: 'Contact Us',
          href: '#'
        }
      ],
      menuToggled: false
    }
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    this.setState({ menuToggled: !this.state.menuToggled });
  }

  render() {
    const menus = this.state.menuList.map(menu => {
      return (
        <li><a href={menu.href}>{menu.name}</a></li>
      );
    });
  
    return (
      <nav className='navbar-menu'>
        <i className='fas fa-bars fa-lg' onClick={this.openMenu} />
        {this.state.menuToggled && (
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
        <NavbarLogo />
        <NavbarMenu />
      </header>
    );
  }
}

export default Navbar;