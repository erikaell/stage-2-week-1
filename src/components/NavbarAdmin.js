import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarAdmin() {
  return (
    <Navbar bg="black" expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src={logo} style={{ maxWidth: '50px' }} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <Nav.Link style={{ color:'white' }} href="/admin/complain">Complain</Nav.Link>
            <Nav.Link style={{ color:'white' }} href="/admin">Category</Nav.Link>
            <Nav.Link style={{ color:'white' }} href="/admin/product">Product</Nav.Link>
            <Nav.Link style={{ color:'white' }} href="#">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarAdmin;