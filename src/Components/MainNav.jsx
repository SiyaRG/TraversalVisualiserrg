import React, { useState } from "react";

import { Container, Navbar, Nav } from "react-bootstrap";
import devLogo from "../Resources/Icons/tic-tac-toe-game-svgrepo-com.svg";

const MainNav = ({ toggleMode }) => {
	return (
		<Navbar
			className="bg-body-tertiary sticky-top"
			collapseOnSelect
			expand="md"
		>
			<Container fluid>
				<Navbar.Brand href="#home" className="NBrand">
					<img
						alt=""
						src={devLogo}
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{" "}
					TIC TAC TOE.rg
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto NBrand">
						<Nav.Link
							href="#Multiplayer"
							className="ms-auto Multiplayer"
							onClick={() => {
								toggleMode("Multiplayer");
							}}
						>
							Multiplayer
						</Nav.Link>
						<Nav.Link
							href="#Easy"
							className="ms-auto Easy"
							onClick={() => {
								toggleMode("Easy");
							}}
						>
							Easy
						</Nav.Link>
						<Nav.Link
							href="#Medium"
							className="ms-auto Medium"
							onClick={() => {
								toggleMode("Medium");
							}}
						>
							Medium
						</Nav.Link>
						<Nav.Link
							href="#Hard"
							className="ms-auto Hard"
							onClick={() => {
								toggleMode("Hard");
							}}
						>
							Hard
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MainNav;
