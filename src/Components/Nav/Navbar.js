import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function ColorSchemesExample() {
  const [activeLink, setActiveLink] = useState('#home');

  return (
    <Navbar bg="light" expand="lg" data-bs-theme="light" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Portfolio Do</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* زر الفتح والإغلاق */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={activeLink} onSelect={(selectedKey) => setActiveLink(selectedKey)}>
            <Nav.Link as={Link} to="/" eventKey="#home" href="#home" className={activeLink === '#home' ? 'text-primary' : ''}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" eventKey="#skills" href="#skills" className={activeLink === '#skills' ? 'text-primary' : ''}>
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/contact"  eventKey="#contact" href="#contact" className={activeLink === '#contact' ? 'text-primary' : ''}>
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:harrasdoaa@gmail.com" title="Send Email">
              <FaEnvelope size={20} />
            </Nav.Link>
            <Nav.Link href="https://wa.me/201050688345" target="_blank" title="Chat on WhatsApp">
              <FaWhatsapp size={20} color="green" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
