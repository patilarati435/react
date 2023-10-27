// src/components/Navbar.js
import React from 'react';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="body-tertiary" expand="lg" className='mb-lg-3'>
      <div className="container-fluid px-5">
        
        <Navbar.Brand href="#" className='fs-3 fw-bold'> <img src="webguard.png" width={30} alt="" />WebGuard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
     
        <Nav className="mx-auto  mb-2 mb-lg-0 ">
            
            
            <NavDropdown title="pricing" id="basic-nav-dropdown" className='me-lg-2'>
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item  className='me-lg-2'>
              <Nav.Link >Resources</Nav.Link>
            </Nav.Item>
            <Nav.Item  className='me-lg-2'>
              <Nav.Link >Supports</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link >Partenar</Nav.Link>
            </Nav.Item>
          </Nav>
        
          <Form className="d-flex " >
          
            
            <Button  className=' border border-0 bg-body-tertiary text-dark' bg="body-tertiary" type="submit">login</Button>
            <Button  className='bg-dark ms-lg-3  border border-0 rounded-5 px-3' type="submit">Sign up</Button>
        </Form>
        </Navbar.Collapse>
        </div>
      
    </Navbar>
  );
}

export default CustomNavbar;
