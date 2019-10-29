import React from 'react';
import { Container } from 'reactstrap';

import Navbar from './Navbar';

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <footer>Toto</footer>
    </>
  );
}

export default MainLayout;
