import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const NavBar = () => {
  const { auth, signOut } = useAuth();
      const navigate=useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signOut();
      console.log(error);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const [highlightedLink, setHighlightedLink] = useState(null);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>AID-CONNECT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {console.log(auth)}
            {!auth && (
              <Nav.Link as={Link} to="/home"
              href="#home"
              style={{...navLinkStyle, ...(highlightedLink === 'home' && highlightedNavLinkStyle) }}
              onMouseEnter={() => setHighlightedLink('home')}
              onMouseLeave={() => setHighlightedLink('null')}
              >
                Home
              </Nav.Link>
            )}
            {!auth && (
              <Nav.Link as={Link} to="/login"
              href="#login"
              style={{...navLinkStyle, ...(highlightedLink === 'login' && highlightedNavLinkStyle) }}
              onMouseEnter={() => setHighlightedLink('login')}
              onMouseLeave={() => setHighlightedLink('null')}
              >
                Login
              </Nav.Link>
            )}
            {!auth && (
              <Nav.Link as={Link} to="/register"
              href="#register"
              style={{...navLinkStyle, ...(highlightedLink === 'register' && highlightedNavLinkStyle) }}
              onMouseEnter={() => setHighlightedLink('register')}
              onMouseLeave={() => setHighlightedLink('null')}
              >
                Register
              </Nav.Link>
            )}
            {!auth && (
              <Nav.Link as={Link} to="/glossary"
              href="#glossary"
              style={{...navLinkStyle, ...(highlightedLink === 'Glossary' && highlightedNavLinkStyle) }}
              onMouseEnter={() => setHighlightedLink('Glossary')}
              onMouseLeave={() => setHighlightedLink('null')}
              >
                Glossary
              </Nav.Link>
            )}
            {auth && (
              <Nav.Link as={Link} to="/contact"
              href="#contact"
              style={{...navLinkStyle, ...(highlightedLink === 'contact' && highlightedNavLinkStyle) }}
              onMouseEnter={() => setHighlightedLink('contact')}
              onMouseLeave={() => setHighlightedLink('null')}
              >
                Contact
              </Nav.Link>
            )}
              {auth && (
              <Nav.Link as={Link} to="/CalamityReportForm"
              href="#CalamityReportForm"
              style={{...navLinkStyle, ...(highlightedLink === 'CalamityReportForm' && highlightedNavLinkStyle) }}
              onMouseEnter={() => setHighlightedLink('CalamityReportForm')}
              onMouseLeave={() => setHighlightedLink('null')}
              >
                CalamityReportForm
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {auth && (
              <Nav.Link as={Button} onClick={handleLogout}>
                LogOut
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const highlightedNavLinkStyle = {
  color : '#5c79e0',
};
const navLinkStyle = {
  fontSize: '16px',
  padding: '15px',
  color: '#e6e7fc',
  transition: 'color 0.3s ease-in-out',
  textDecoration: 'none',
  cursor: 'pointer',
};
export default NavBar;