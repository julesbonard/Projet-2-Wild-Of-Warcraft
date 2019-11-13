import React from 'react';
import { Container } from 'reactstrap';

import Navbar from './Navbar';

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Container className="content">{children}</Container>
      <footer>{/*World Of Warcraft, c'est bien mais Apex, c'est mieux. - Confucius */}</footer>
    </>
  );
}

export default MainLayout;
