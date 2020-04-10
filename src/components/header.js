import { Link } from "gatsby"
import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import Logo from '../components/logo';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand as={Link} to="/"><Logo /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/questionnaires">Questionnaires</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
