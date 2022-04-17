import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
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
                        <Nav className='d-flex'>



                            {
                                user ?
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <button onClick={handleSignOut} className='me-2'>sign out</button>

                                        <p>{user.email}</p>

                                    </div> :
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <Nav.Link as={Link} to="register">
                                            Register
                                        </Nav.Link>

                                        <Nav.Link as={Link} to="login">
                                            Login
                                        </Nav.Link>
                                    </div>
                            }
                            {/* <button>sign out</button>
                            <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link> */}


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;