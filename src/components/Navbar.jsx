import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import '../Css/Navbar.css';

function myNavbar() {
  return (
    <div style={{ marginBottom: '40px' }}>
      <Navbar className="navbar_body">
        <NavbarBrand className={`mx-auto mr-auto`} style={{ fontSize: '30px' }}>
          <Link
            to="/"
            className={`text-light`}
            style={{ textShadow: '2px 2px 5px rgba(6, 5, 24,0.6)' }}
          >
            Nom du Site
          </Link>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default myNavbar;
