import React from "react";

export const checkState = board => {
	const winningSequences = [
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	//Check X
	let state = "";
	let seq = null;
	winningSequences.forEach(sequence => {
		let count = 0;
		sequence.forEach(square => {
			if (board[square] === "X") {
				count++;
			}
		});
		if (count === 3) {
			state = "X";
			seq = [...sequence];
		}
	});
	if (state === "") {
		winningSequences.forEach(sequence => {
			let count = 0;
			sequence.forEach(square => {
				if (board[square] === "O") {
					count++;
				}
			});
			if (count === 3) {
				state = "O";
				seq = [...sequence];
			}
		});
	}
	if (state === "") {
		board.forEach(square => {
			if (square !== "O" && square !== "X") {
				state = "Live";
			}
		});
	}
	if (state === "") {
		state = "Draw";
	}
	return [state, seq];
};

export const isValidMove = (board, move) => {
	if (board[move] === "X" || board[move] === "O") {
		return false;
	} else {
		return true;
	}
};

//AI
const minimax = (board, depth, maxDepth, max) => {
	if (depth > maxDepth) return 0;
	if (checkState(board)[0] === "X") {
		return -10;
	} else if (checkState(board)[0] === "O") {
		return 10;
	} else if (checkState(board)[0] === "Draw") {
		return 0;
	} else {
		if (max) {
			let bestValue = -100;
			board.forEach(square => {
				if (square !== "X" && square !== "O") {
					board[square - 1] = "O";
					bestValue = Math.max(
						bestValue - depth,
						minimax(board, depth + 1, maxDepth, !max)
					);
					board[square - 1] = square;
				}
			});
			return bestValue;
		} else {
			let bestValue = 100;
			board.forEach(square => {
				if (square !== "X" && square !== "O") {
					board[square - 1] = "X";
					bestValue = Math.min(
						bestValue + depth,
						minimax(board, depth + 1, maxDepth, !max)
					);
					board[square - 1] = square;
				}
			});
			return bestValue;
		}
	}
};
export const getEngineMove = (board, mode) => {
	let maxValue = -100;
	let bestMove = -1;
	let depth = 2;
	if (mode === "Medium") {
		depth = 4;
	} else if (mode === "Hard") {
		depth = 99;
	}
	board.forEach(square => {
		if (square !== "X" && square !== "O") {
			board[square - 1] = "O";
			let Value = minimax(board, 0, depth, false);
			board[square - 1] = square;

			if (maxValue < Value) {
				maxValue = Value;
				bestMove = square;
			}
		}
	});
	return bestMove;
};
