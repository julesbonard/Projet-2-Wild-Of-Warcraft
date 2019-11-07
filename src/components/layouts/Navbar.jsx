import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import styles from './Navbar.module.scss';

function myNavbar() {
  return (
    <header style={{ marginBottom: '40px' }}>
      <Navbar className={styles.body}>
        <NavbarBrand tag={Link} to="/" className={`mx-auto mr-auto ${styles.title}`}>
          Wild Of Warcraft
        </NavbarBrand>
      </Navbar>
    </header>
  );
}

export default myNavbar;
