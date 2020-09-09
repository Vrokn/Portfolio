import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


export default function Header() {

    return (
        <Navbar className={'header'} collapseOnSelect expand="md" bg="transparent" variant="dark" fixed='top'>
            <Navbar.Brand href="#home">Mateo Gómez Ossa</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <NavDropdown title="Projects" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#knot">Knot E-commerce</NavDropdown.Item>
                        <NavDropdown.Item href="#voting">Posts voting</NavDropdown.Item>
                        <NavDropdown.Item href="#picas">Bulls and Cows</NavDropdown.Item>
                        <NavDropdown.Item href="#jaguar">Jaguar Landing</NavDropdown.Item>
                        <NavDropdown.Item href="#timers">Stopwatches</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}