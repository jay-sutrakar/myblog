import React from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button
} from 'reactstrap';

const toolbar = (props) => {

  return (
    <div>
      <Navbar style={{marginBottom:'20px'}} fixed='top' color="dark" light expand="md">
        <NavbarBrand style={{color:'white'}}href="/">MyBlog</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          
        </Collapse>
        <Button>Login</Button>
      </Navbar>
    </div>
  );
}

export default toolbar;
