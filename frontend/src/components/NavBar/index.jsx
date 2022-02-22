import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import "./styles.css"

export default function NavbarApp () {
    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">OntheWheels</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end w-100">
                        <Nav.Link href="/stations">Stations</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}