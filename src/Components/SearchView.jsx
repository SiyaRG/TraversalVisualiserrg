import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import SearchInfo from "./SearchInfo.jsx";

const { BFS, DFS, Djk, Astar } = require("../Algorithms/Algorithms.js");

const SearchView = ({ Algorithm, toggle }) => {
    const [play, setPlay] = useState(false);
    const [origin, setOrigin] = useState("0");
    const [destination, setDestination] = useState("296");
    const [tree, setTree] = useState([]);
    const [traversed, setTraversed] = useState([]);
    const [obstacles, setObstacles] = useState([]);

    useEffect(() => {
        let o = Math.floor(Math.random() * 400);
        let d = 0;
        do {
            d = Math.floor(Math.random() * 400);
        } while (d === o);
        let obs = [];
        for (let i = 0; i < 100; i++) {
            let s = Math.floor(Math.random() * 400);
            if (o != s && d != s) {
                obs.push(s);
            } else {
                i--;
            }
        }

        let t = [];

        for (let i = 0; i < 400; i++) {
            t.push([]);
            let q = document.getElementById(`${i}`);

            if (obs.indexOf(i) === -1) {
                if (i % 20 !== 0) {
                    if (obs.indexOf(i - 1) === -1) t[i].push(String(i - 1));

                    if (i - 20 > 0 && obs.indexOf(i - 21) === -1)
                        t[i].push(String(i - 21));
                    if (i + 20 < 400 && obs.indexOf(i + 19) === -1)
                        t[i].push(String(i + 19));
                }
                if (i + 20 < 400 && obs.indexOf(i + 20) === -1)
                    t[i].push(String(i + 20));
                if ((i - 19) % 20 !== 0) {
                    if (obs.indexOf(i + 1) === -1) t[i].push(String(i + 1));
                    if (i - 20 > 0 && obs.indexOf(i - 19) === -1)
                        t[i].push(String(i - 19));
                    if (i + 20 < 400 && obs.indexOf(i + 21) === -1)
                        t[i].push(String(i + 21));
                }
                if (i - 20 >= 0 && obs.indexOf(i - 20) === -1)
                    t[i].push(String(i - 20));
            }
            q[i] = t[i];
        }
        setTraversed([]);
        setTree(t);
        setOrigin(`${o}`);
        setDestination(`${d}`);
        setObstacles(obs);
    }, [Algorithm]);
    useEffect(() => {}, [traversed]);

    const graph = () => {
        let className = "";
        let graphCells = [];
        for (let i = 0; i < 400; i++) {
            let t = document.getElementById(`${i}`);

            if (t !== null) {
                t.classList.remove(...t.classList);
                void t.offsetWidth;
                if (String(i) === traversed[traversed.length - 1]) {
                    t.classList.add("reached");
                    t.style.animationDelay = `${(traversed.length - 1) / 10}s`;
                } else if (String(i) === traversed[0]) {
                    t.classList.add("origin");
                } else if (obstacles.indexOf(i) !== -1) {
                    t.classList.add("obstacle");
                } else if (traversed.indexOf(String(i)) !== -1) {
                    t.classList.add("visited");
                    t.style.animationDelay = `${
                        traversed.indexOf(String(i)) / 10
                    }s
                        `;
                } else {
                    t.classList.add("normal");
                }
            }

            if (String(i) === destination) {
                className = "destination";
            } else if (String(i) === origin) {
                className = "origin";
            } else if (obstacles.indexOf(i) !== -1) {
                className = "obstacle";
            } else {
                className = "normal";
            }
            graphCells.push(<div id={i} className={className}></div>);
        }
        toggle(false);
        return graphCells;
    };

    return (
        <Container
            fluid
            className="text-center d-flex flex-column justify-content-center align-items-center"
        >
            <Row className="mt-4 mb-3">
                <h1>{Algorithm.name}</h1>
            </Row>
            <Row className="d-flex justify-content-center mb-2">
                <SearchInfo algorithm={Algorithm} />
            </Row>
            <Row className="d-flex flex-wrap justify-content-center">
                {" "}
                <div id="graph" className="mb-3">
                    {graph()}
                </div>
            </Row>

            <Row className="d-flex justify-content-center">
                <Button
                    id="btnToggle"
                    className="mb-3"
                    onClick={e => {
                        toggle(true);

                        let w = async () => {
                            switch (Algorithm.name) {
                                case "Breadth First Search":
                                    setTraversed(
                                        await BFS(tree, origin, destination)
                                            .checked
                                    );
                                    break;
                                case "Depth First Search":
                                    setTraversed(
                                        await DFS(tree, origin, destination)
                                            .checked
                                    );
                                    break;
                                case "Dijkstra's Algorithm":
                                    setTraversed(
                                        await Djk(tree, origin, destination)
                                    );
                                    break;
                                case "A*":
                                    setTraversed(
                                        await Astar(tree, origin, destination)
                                    );
                                    break;
                            }
                        };
                        w();
                    }}
                >
                    {(() => {
                        return play ? "stop" : "play";
                    })()}
                </Button>
            </Row>
        </Container>
    );
};
export default SearchView;
