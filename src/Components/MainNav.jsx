import React, { useState } from "react";

import { Container, Navbar, Nav } from "react-bootstrap";
import devLogo from "../Resources/Icons/eye-svgrepo-com.svg";

const MainNav = ({ toggle }) => {
    const handleToggle = view => {
        toggle(view);
    };
    return (
        <Navbar id="nav" className="sticky-top" collapseOnSelect expand="md">
            <Container fluid>
                <Navbar.Brand href="#home"id="navBrand">
                    <img
                        alt=""
                        src={devLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    TraveralVisualiser.rg
                </Navbar.Brand>
                <Navbar.Toggle id="btnNav" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex">
                        <Nav.Link
                            className="ms-auto"
                            href="#dfs"
                            onClick={() => {
                                handleToggle("dfs");
                            }}
                        >
                            Depth First Search
                        </Nav.Link>
                        <Nav.Link
                            className="ms-auto"
                            href="#bfs"
                            onClick={() => {
                                handleToggle("bfs");
                            }}
                        >
                            Breadth First Search
                        </Nav.Link>
                        <Nav.Link
                            className="ms-auto"
                            href="#djk"
                            onClick={() => {
                                handleToggle("dijkstra");
                            }}
                        >
                            Dijkstra's Search
                        </Nav.Link>
                        <Nav.Link
                            className="ms-auto"
                            href="#ast"
                            onClick={() => {
                                handleToggle("a_star");
                            }}
                        >
                            A* Search
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNav;
