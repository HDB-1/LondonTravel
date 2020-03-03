import React from 'react';
import '../styling/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Navbar.Brand href="">London Travel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/linestatus">Lines</Nav.Link>
                        <Nav.Link href="/map">Tube Map</Nav.Link>
                        <Nav.Link href="/weather">Weather</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;