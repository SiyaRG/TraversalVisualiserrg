import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import O from "../Resources/Icons/letter-o-svgrepo-com.svg";
import X from "../Resources/Icons/x-symbol-svgrepo-com.svg";
const {
	getEngineMove,
	checkState,
	isValidMove
} = require("../GameLogic/Engine.js");

const Board = ({ gameMode, reset }) => {
	const [board, setBoard] = useState([
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9"
	]);
	const [turn, setTurn] = useState("X");
	const [turnClass, setTurnClass] = useState("x");
	const [winningSequence, setWinningSequence] = useState(null);
	const attemptMove = (e, move) => {
		if (checkState(board)[0] === "Live" && isValidMove(board, move)) {
			if (gameMode === "Multiplayer" || turn === "X") {
				setBoard(
					board.map(item => {
						if (item == move + 1) {
							return turn;
						} else {
							return item;
						}
					})
				);
				e.target.classList.add(turn === "X" ? "X" : "O");
			}
		}
	};
	useEffect(() => {
		if (
			gameMode !== "Multiplayer" &&
			checkState(board)[0] === "Live" &&
			turn === "O"
		) {
			const engineMove = getEngineMove(board, gameMode);

			setBoard(
				board.map(item => {
					if (item == engineMove) {
						return turn;
					} else {
						return item;
					}
				})
			);

			document
				.getElementById(engineMove)
				.classList.add(turn === "X" ? "X" : "O");
		}
	}, [turn]);
	useEffect(
		reset => {
			for (let i = 0; i < 9; i++) {
				const sq = document.getElementById(`${i + 1}`);
				sq.classList.remove(...sq.classList);
				void sq.offsetWidth;
				sq.classList.add("square");
			}
			setBoard(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
			setWinningSequence(null);
		},
		[reset]
	);

	useEffect(() => {
		if (checkState(board)[0] === "Draw") {
		} else {
			setTurn(turn === "X" ? "O" : "X");
		}
		setTurnClass(turn === "X" ? "o":"x");
		if (checkState(board)[0] !== "Live") {
			if (checkState(board)[0] !== "Draw") {
				const first = document.getElementById(
					`${checkState(board)[1][0] + 1}`
				);

				first.classList.remove(checkState(board)[0]);
				void first.offsetWidth;
				first.classList.add(`${checkState(board)[0]}first`);
				const second = document.getElementById(
					`${checkState(board)[1][1] + 1}`
				);

				second.classList.remove(checkState(board)[0]);
				void second.offsetWidth;

				second.classList.add(`${checkState(board)[0]}second`);
				const third = document.getElementById(
					`${checkState(board)[1][2] + 1}`
				);

				third.classList.remove(checkState(board)[0]);
				void third.offsetWidth;
				third.classList.add(`${checkState(board)[0]}third`);
			}
		}
	}, [board]);

	return (
		<Container className="d-grid Board ms-1 me-1 mt-3">
			<Row className="d-flex justify-content-center">
				<Col className={turnClass}>
					<div
						id="1"
						className="square"
						onClick={e => {
							attemptMove(e, 0);
						}}
					></div>
				</Col>
				<Col className={turnClass}>
					{" "}
					<div
						id="2"
						className="square"
						onClick={e => {
							attemptMove(e, 1);
						}}
					></div>
				</Col>
				<Col className={turnClass}>
					{" "}
					<div
						id="3"
						className="square"
						onClick={e => {
							attemptMove(e, 2);
						}}
					></div>
				</Col>
			</Row>
			<Row className="d-flex justify-content-center">
				<Col className={turnClass}>
					{" "}
					<div
						id="4"
						className="square"
						onClick={e => {
							attemptMove(e, 3);
						}}
					></div>
				</Col>
				<Col className={turnClass}>
					{" "}
					<div
						id="5"
						className="square"
						onClick={e => {
							attemptMove(e, 4);
						}}
					></div>
				</Col>
				<Col className={turnClass}>
					{" "}
					<div
						id="6"
						className="square"
						onClick={e => {
							attemptMove(e, 5);
						}}
					></div>
				</Col>
			</Row>
			<Row className="d-flex justify-content-center">
				<Col className={turnClass}>
					{" "}
					<div
						id="7"
						className="square"
						onClick={e => {
							attemptMove(e, 6);
						}}
					></div>
				</Col>
				<Col className={turnClass}>
					{" "}
					<div
						id="8"
						className="square"
						onClick={e => {
							attemptMove(e, 7);
						}}
					></div>
				</Col>
				<Col className={turnClass}>
					{" "}
					<div
						id="9"
						className="square"
						onClick={e => {
							attemptMove(e, 8);
						}}
					></div>
				</Col>
			</Row>
		</Container>
	);
};

export default Board;
