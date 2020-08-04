import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Header() {

    return (
        <Navbar className={'header'} collapseOnSelect expand="md" bg="transparent" variant="dark" fixed='top'>
            <Navbar.Brand href="#home">Mateo Gómez Ossa</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#About">About</Nav.Link>
                    <NavDropdown title="Proyects" id="collasible-nav-dropdown" className="super-colors">
                        <NavDropdown.Item href="#action/3.0">Category Rooster</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Stopwatches</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Posts voting</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Knot E-commerce</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Bulls and Cows</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Jaguar Landing</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}