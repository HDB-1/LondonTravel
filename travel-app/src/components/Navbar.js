import React from 'react';
// import {Link} from 'react-router-dom';
import '../styling/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">London Travel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/linestatus">Lines</Nav.Link>
                        <Nav.Link href="/map">Tube Map</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            
            {/* <Link to="/">Home</Link>
            <Link to="/linestatus">Lines</Link>
            <Link to="/map">Tube Map</Link> */}

        </div>
    )
}

export default NavBar;