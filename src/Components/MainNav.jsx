import React, { useState } from "react";

import { Container, Navbar, Nav } from "react-bootstrap";
import devLogo from "../Resources/Icons/power-button-svgrepo-com.svg";

const MainNav = ({ toggle }) => {
	const handleToggle = view => {
		toggle(view);
	};
	return (
		<Navbar
			className="bg-body-tertiary sticky-top"
			collapseOnSelect
			expand="md"
		>
			<Container fluid>
				<Navbar.Brand href="#home">
					<img
						alt=""
						src={devLogo}
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{" "}
					Siya
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto d-flex">
						<Nav.Link
							className="ms-auto"
							href="#home"
							onClick={() => {
								handleToggle("Home");
							}}
						>
							Home
						</Nav.Link>
						<Nav.Link
							className="ms-auto"
							href="#AboutMe"
							onClick={() => {
								handleToggle("About");
							}}
						>
							About Me
						</Nav.Link>
						<Nav.Link
						className="ms-auto"
							href="#Projects"
							onClick={() => {
								handleToggle("Projects");
							}}
						>
							Projects
						</Nav.Link>
						<Nav.Link
							className="ms-auto"
							href="#ContactMe"
							onClick={() => {
								handleToggle("Contact");
							}}
						>
							Contact Me
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MainNav;
