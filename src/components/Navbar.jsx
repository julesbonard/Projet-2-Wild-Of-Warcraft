import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import '../Css/Navbar.scss';

function myNavbar() {
  return (
    <div style={{ marginBottom: '40px' }}>
      <Navbar className="navbar_body">
        <NavbarBrand className={`mx-auto mr-auto`}>
          <Link to="/" className={`title-navbar`}>
            Nom du Site
          </Link>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default myNavbar;
