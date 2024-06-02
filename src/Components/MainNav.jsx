import React, { useState } from "react";

import { Container, Navbar, Nav } from "react-bootstrap";
import devLogo from "../Resources/Icons/36311.svg";

const MainNav = ({ toggleMode }) => {
	return (
		<Navbar
			className="bg-body-tertiary sticky-top"
			collapseOnSelect
			expand="md"
		>
			<Container fluid>
				<Navbar.Brand href="#home" className="c">
					<img
						alt=""
						src={devLogo}
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{" "}
					Chess.rg
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto c d-flex">
						<Nav.Link
							className="c ms-auto mt-3"
							href="#Multiplayer"
							onClick={() => {
								toggleMode("Multiplayer");
							}}
						>
							Multiplayer
						</Nav.Link>
						<Nav.Link
							className="c ms-auto mt-2"
							href="#Stockfish"
							onClick={() => {
								toggleMode("Stockfish");
							}}
						>
							Stockfish
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MainNav;
