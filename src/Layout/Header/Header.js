import React from 'react';
import logo from './logo.svg'
import {NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3 header">
                    <Container fluid>
                        <div className="header__logo">
                            <NavLink to=""> <img src={logo} alt=""/></NavLink>

                            <h1><NavLink className="header__title" to="">Aegem Studio</NavLink></h1>
                        </div>
                        <Navbar.Toggle className='bg-light' aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"

                        >
                            <Offcanvas.Header closeButton className='header__offcanvas'>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 header__links">
                                    <NavLink className="header__links-item" to="/about-us">About Us</NavLink>
                                    <NavLink className="header__links-item" to="/contact-us">Contact Us</NavLink>
                                    <NavLink className="header__links-item" to="/portfolio">Portfolio</NavLink>
                                    <NavLink className="header__links-item" to="/videos">Videos</NavLink>
                                    <NavLink className="header__links-item" to="/book-now">Book Now</NavLink>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

        </>
    );
};

export default Header;

