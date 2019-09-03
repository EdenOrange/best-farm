import React from 'react';
import NavbarLogo from './NavbarLogo/NavbarLogo';
import NavbarMenu from './NavbarMenu/NavbarMenu';

const Navbar = () => {
  return (
    <header className="navbar-container" id="header">
      <div className="navbar-background" />
      <NavbarLogo />
      <NavbarMenu />
    </header>
  );
};

export default Navbar;
