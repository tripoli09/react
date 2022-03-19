import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import React from "react";
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Puma</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Inicio</Nav.Link>
                            <Nav.Link href="#">Envío</Nav.Link>
                            <NavDropdown title="Tienda" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Pantalones</NavDropdown.Item>
                                <NavDropdown.Item href="#">Remeras</NavDropdown.Item>
                                <NavDropdown.Item href="#">Abrigos</NavDropdown.Item>
                            </NavDropdown>
                            <CartWidget />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;