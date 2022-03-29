import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../Hooks/useFirebase';

const NavBar = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Ed-Tech</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="#courses">Courses</Nav.Link>
                            <Nav.Link as={HashLink} to="#about">About</Nav.Link>
                            {user?.email && <Nav.Link as={Link} to="/"><h5>{user?.displayName}</h5></Nav.Link>}
                            {!user?.email ? <Nav.Link as={Link} to="/login">Login</Nav.Link> : <Button className='rounded-pill' variant="primary" size="sm" onClick={handleSignOut}>Sign Out</Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;