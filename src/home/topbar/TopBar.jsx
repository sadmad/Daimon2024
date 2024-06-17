import logo from "../../../images/Logo-white.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const TopBar = (props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar navbar-dark bg-dark">
        
          <Navbar.Brand>
            <a className="navbar-brand" href="/">
              <img className="logo" src={logo} alt="Daimon-Logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="https://www.tu-clausthal.de/">
              TU Clausthal
            </Nav.Link>
            <Nav.Link onClick={props.formDisplay} href="#">
              Login
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
     
      </Navbar>
    </>
  );
};

export default TopBar;
