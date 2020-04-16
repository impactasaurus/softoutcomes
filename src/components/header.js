import { Link } from "gatsby"
import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Logo from '../components/logo';
import Search from "./search"

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand as={Link} to="/"><Logo /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/questionnaires">Questionnaires</Nav.Link>
      </Nav>
      <Search dark={true} />
    </Navbar.Collapse>
  </Navbar>
)

export default Header
