import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Header() {

    return (
        <Navbar className={'header'} collapseOnSelect expand="lg" bg="transparent" variant="dark" >
            <Navbar.Brand href="#home">Mateo Gómez Ossa</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">About</Nav.Link>
                    <NavDropdown title="Works" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#Contact">Contact</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}