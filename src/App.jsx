import React, { useState, useEffect, StrictMode } from "react";
import O from "./Resources/Icons/letter-o-svgrepo-com.svg";
import X from "./Resources/Icons/x-symbol-svgrepo-com.svg";
import "./TTT.css";
import "../node_modules/animate.css/animate.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";

import { Container, Row, Col, Button } from "react-bootstrap";
import MainNav from "./Components/MainNav.jsx";
import Board from "./Components/Board.jsx";
//App
const App = () => {
	const [mode, setMode] = useState("Multiplayer");
	const [opponent, setOpponent] = useState("Player 2");
	const [oppColor, setOppColor] = useState("multiplayer");
	const [reset, setReset] = useState(false);

	const toggleMode = toMode => {
		setMode(toMode);
		setOppColor(toMode);
		setReset(!reset);
		switch (toMode) {
			case "Multiplayer":
				setOpponent("Player 2");

				break;
			case "Easy":
				setOpponent("Siya");
				break;
			case "Medium":
				setOpponent("SBS");

				break;
			case "Hard":
				setOpponent("ZEN OTI");

				break;
		}
	};
	return (
		<StrictMode>
			<Container
				fluid
				className="d-flex flex-column min-vh-100 min-vw-100 bg-secondary-subtle overflow-x-hidden p-0 text-white"
				data-bs-theme="dark"
			>
				<MainNav toggleMode={toggleMode} />
				<h1 className={`text-center mt-3 mb-4 NBrand ${oppColor}`}>
					{mode}
				</h1>
				<Row className="text-center mb-4 NBrand d-flex justify-content-center">
					<Col>
						<h3>Player 1</h3>
						<img alt="" width="30" height="30" src={X} />
					</Col>
					<Col>
						<h3>{opponent}</h3>
						<img alt="" width="30" height="30" src={O} />
					</Col>
				</Row>

				<Board gameMode={mode} reset={reset} />

				<Row className="d-flex justify-content-center mt-3 mb-4">
					<Button
						id="reset"
						onClick={e => {
							setReset(!reset);
						}}
					>
						Reset
					</Button>
				</Row>
			</Container>
		</StrictMode>
	);
};

export default App;
