import logo from '../assets/logo.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarUser() {
  return (
    <Navbar bg="black" expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src={logo} style={{ maxWidth: '50px' }} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <Nav.Link style={{ color:'white' }} href="/user">Product</Nav.Link>
            <Nav.Link style={{ color:'white' }} href="/user/complain">Complain</Nav.Link>
            <Nav.Link style={{ color:'white' }} href="/user/profile">Profile</Nav.Link>
            <Nav.Link style={{ color:'white' }} href="#">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarUser;