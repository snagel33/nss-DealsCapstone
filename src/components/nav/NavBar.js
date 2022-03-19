import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

export const NavBar = () => {
    return (
        <ul className="navbar">
              <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="/home">Website Logo</Navbar.Brand>
                <Nav className="me-auto">
                {/* <Nav.Link href="/home">Home</Nav.Link> */}
                <Nav.Link href="/deals">Deals</Nav.Link>
                <Nav.Link href="/categories">Categories</Nav.Link>
                <Nav.Link href="/forum">Forum</Nav.Link>
                <Nav.Link href="/clearUser">Sign Out</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </ul>
    );
};
