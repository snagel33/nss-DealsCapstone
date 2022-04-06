import React from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";



// const handleLogout = () => {
//     clearUser();
//     history('/');
// }



export const NavBar = () => {
    const history = useNavigate();

    const Logout = () => {
        sessionStorage.clear();
        history.push("/");
    };

    var icon = (
        <span class="logo">
          <a href="/">
            <img src="../Gameshack.png" height="150" width="150" alt="text here" /></a>
        </span>
      );

    return (
        <ul className="navbar">
              <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="/home">{icon}</Navbar.Brand>
                <Nav className="me-auto">
                {/* <Nav.Link href="/home">Home</Nav.Link> */}
                <Nav.Link href="/deals">Deals</Nav.Link>
                <Nav.Link href="/categories">Categories</Nav.Link>
                <Nav.Link href="/forum">Forum</Nav.Link>
                <Nav.Link href="/users">Profile</Nav.Link>
                <Nav.Link href="/login" onClick={Logout}>Sign Out</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </ul>
    );
};
