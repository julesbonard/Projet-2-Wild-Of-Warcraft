import React from 'react';
import { Container } from 'reactstrap';

import Navbar from './Navbar';

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Container className="content">{children}</Container>
      <footer>Toto</footer>
    </>
  );
}

export default MainLayout;
