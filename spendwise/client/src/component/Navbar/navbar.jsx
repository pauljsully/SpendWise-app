import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/img/logo.png';
import LoginForm from '../loginForm/loginForm';
import SignupForm from '../signupForm/signupForm';
import Auth from '../../utils/auth';

const Navigation = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Navbar collapseOnSelect variant='dark' expand='lg' className="navbar">
                <Container fluid>
                    <Navbar.Brand className="brand">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Spendwise
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navbar'>
                        <Nav className='ml-auto'>
                            <Nav.Link eventKey="1" as={Link} to='/'>
                                Home
                            </Nav.Link>
                            {Auth.loggedIn() ? (
                                <>
                                    <Nav.Link eventKey="2" as={Link} to='/dashboard'>
                                        Dashboard
                                    </Nav.Link>
                                    <Nav.Link eventKey="3" as={Link} to='/transactions'>
                                        Transactions
                                    </Nav.Link>
                                    <Nav.Link eventKey="4" onClick={Auth.logout}>Logout</Nav.Link>
                                </>
                            ) : (
                                <Nav.Link eventKey="5" onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='signup-modal'
                centered // Bootstrap utility to center the modal vertically and horizontally
                className="custom-modal" // Custom CSS class for additional styling
            >
                <Tab.Container defaultActiveKey='login'>
                    <Modal.Header closeButton>
                        <Modal.Title id='signup-modal'>
                            <Nav variant='pills'>
                                <Nav.Item>
                                    <Nav.Link eventKey='login'>Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='login'>
                                <LoginForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                            <Tab.Pane eventKey='signup'>
                                <SignUpForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </>
    );
};

export default Navigation;
