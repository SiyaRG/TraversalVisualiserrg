import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "./Resources/Spinners/Spinner.jsx";
import MainNav from "./Components/MainNav.jsx";
import GlobalFooter from "./Components/Footer.jsx";
import SearchView from "./Components/SearchView.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./TraversalVisualiser.css";
import "animate.css";
const Algorithms = require("./Models/Algorithms.json");
const App = () => {
    const [spinShow, setSpinShow] = useState(true);
    const [view, setView] = useState("dijkstra");
    useEffect(() => {}, [view]);

    const toggleView = changeTo => {
        setView(changeTo);
        setSpinShow(true);
    };
    const toggleLoad = s => {
        setSpinShow(s);
    };
    return (
        <Container
            id="container"
            fluid
            className="w-100 h-100 m-0 p-0 d-flex flex-column justify-content-center"
        >
            <MainNav toggle={toggleView} />
            <Spinner id="spinner" show={spinShow} />

            <SearchView Algorithm={Algorithms[view]} toggle={toggleLoad} />
            <GlobalFooter />
        </Container>
    );
};

export default App;
