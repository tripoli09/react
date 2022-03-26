import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import React from "react";
import CartWidget from './CartWidget';
import './style/NavBar.css'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="warning" expand="lg" >
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
                            <div>
                                <CartWidget/>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;