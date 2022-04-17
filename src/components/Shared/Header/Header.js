import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="warning" variant="dark">
                <Container>
                    <Navbar.Brand className='ms-0 ps-0 pe-3' as={Link} to="/">
                        Learn with Sabeek
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-3">
                            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>


                            <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;