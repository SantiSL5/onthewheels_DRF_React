import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function NavbarApp () {
    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">OntheWheels</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end w-100">
                        <Nav.Link>Login</Nav.Link>
                        <Nav.Link>Register</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}