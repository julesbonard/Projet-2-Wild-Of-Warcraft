import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import '../Css/Navbar.scss';

function myNavbar() {
  return (
    <div style={{ marginBottom: '40px' }}>
      <Navbar className="navbar_body">
        <NavbarBrand tag={Link} to="/" className={`mx-auto mr-auto title-navbar`}>
          Wild Of Warcraft
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default myNavbar;
