import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class myNavbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            collapsed: true
        }
        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

  toggleNavbar() {
      this.setState({collapsed: !this.state.collapsed})
  }

  render(){
      return (
          <div>
      <Navbar color="shadow-lg p-1 mb-5 bg-secondary rounded">
        <NavbarBrand className={`mx-auto mr-auto`} style={{fontSize:"30px"}}>
          <Link to="/" className={`text-light`} style={{textShadow: "8px 8px 10px black"}}>
          Nom du Site
          </Link>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}
}

export default myNavbar;
