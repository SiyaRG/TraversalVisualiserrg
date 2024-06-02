import React, { useState, useEffect } from "react";

import Chessboard from "chessboardjsx";
import { Chess } from "chess.js";
import "./Chess.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";

import { Container, Row, Col, Button } from "react-bootstrap";
import MainNav from "./Components/MainNav.jsx";
//App
const App = () => {
    const [fen, setFen] = useState(
        "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    );
    const [mode, setMode] = useState("Multiplayer");
    const toggleMode = toMode => {
        setMode(toMode);
        chess.reset();
        setTurn("white");
        setFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    };

    const chess = new Chess(fen);
    const [turn, setTurn] = useState("white");
    const [legalStyles, setLegalStyles] = useState({});
    const [activeSquare, setActiveSquare] = useState("");

    const getLegalMoves = csquare => {
        const legal = chess.moves({ square: csquare });

        const stylesObject = {};
        Object.assign(stylesObject, {
            [csquare]: { backgroundColor: "rgba(1,145,197,0.623)" }
        });
        legal.forEach(move => {
            Object.assign(stylesObject, {
                [move.slice(-2)]: { backgroundColor: "rgba(131,250,157,0.846)" }
            });
        });

        return stylesObject;
    };
    const playMove = async nsquare => {
        if (
            activeSquare !== "" &&
            chess.moves({ square: activeSquare }).length !== 0
        ) {
            try {
                chess.move({ from: activeSquare, to: nsquare });
                setFen(chess.fen());
            } catch (error) {
                try {
                    chess.move({
                        from: activeSquare,
                        to: nsquare,
                        promotion: "q"
                    });
                    setFen(chess.fen());
                } catch {}
            }
            if (mode === "Multiplayer") {
                setTurn(chess.turn() == "b" ? "black" : "white");
            } else {
                let bestMove = await getStockfishMove(chess.fen());
                chess.move(bestMove);
                setFen(chess.fen());
            }
            if (chess.inCheck()) {
                alert("check");
            }
            if (chess.isGameOver()) {
                alert("GameOver");
            }

            setActiveSquare("");
        } else {
        }
    };
    const getStockfishMove = async fenString => {
        const par = {};
        par.fen = fenString;
        par.depth = 13;
        const query = new URLSearchParams(par);
        const response = await fetch(
            `https://stockfish.online/api/s/v2.php?${query.toString()}`
        );
        const res = await response.json();

        if (res.success) {
            const continuation = res.continuation.split(" ");

            return continuation[0];
        } else {
        }
    };
    return (
        <Container
            fluid
            className="min-vh-100 min-vw-100 bg-secondary-subtle overflow-x-hidden p-0"
            data-bs-theme={(() => {
                if (mode === "Stockfish") return "dark";
            })()}
        >
            <MainNav toggleMode={toggleMode} />
            <Row
                id="mode"
                className="d-flex text-center mt-3 c"
                styles={(() => {
                    if (mode === "Stockfish") {
                        return { color: "rgba(5,195,221,0.666)" };
                    } else {
                        return { color: "black" };
                    }
                })()}
            >
                <h1>{mode}</h1>
            </Row>
            <Row className=" mt-3 p-3 d-flex flex-column align-items-center">
                <Container id="board" className="m-0 p-0 h-100 ">
                    <Chessboard
                        position={fen}
                        orientation={turn}
                        width={(() => {
                            if (window.innerWidth < 500) {
                                
                                return "300";
                            } else if (window.innerWidth < 1400) {
                                alert("medium");
                                return "500";
                            } else {
                                alert("large");
                                return "700";
                            }
                        })()}
                        boardStyle={{
                            boxShadow: "0 0 .5rem black",
                            padding: "0"
                        }}
                        darkSquareStyle={{ backgroundColor: "#11dfef" }}
                        lightSquareStyle={{
                            backgroundColor: "rgba(255,255,255,0.17)"
                        }}
                        dropSquareStyle={{
                            backgroundColor: "rgba(0,0,0,0.119)",
                            boxShadow: "0 0 .75rem rgb(1,187,197)"
                        }}
                        onSquareClick={square => {
                            setLegalStyles(getLegalMoves(square));
                            setActiveSquare(square);
                            playMove(square);
                        }}
                        squareStyles={legalStyles}
                        onMouseOverSquare={square => {
                            setLegalStyles(getLegalMoves(square));
                        }}
                        allowDrag={() => {
                            return false;
                        }}
                    />
                </Container>
            </Row>
            <Row
                className="d-flex text-center mt-3 justify-content-center"
                styles={{ color: "rgba(75,87,89,0.846)" }}
            >
                <Button
                    id="btnReset"
                    onClick={() => {
                        chess.reset();
                        setTurn("white");
                        setFen(
                            "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
                        );
                    }}
                >
                    O
                </Button>
            </Row>
        </Container>
    );
};

export default App;
