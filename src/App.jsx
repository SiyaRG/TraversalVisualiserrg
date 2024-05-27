import React from "react";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import "./Portfolio.css";
import "animate.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

//bootstap imports
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";

//react-bootstrap imports
import { Container, Row, Col } from "react-bootstrap";

//Components imports
import MainNav from "./Components/MainNav";
import GlobalFooter from "./Components/Footer";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About Me/About.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact Me/Contact.jsx";

//App
const App = () => {
	const [view, setView] = useState("Home");
	useEffect(() => {}, [view]);

	const toggleView = changeTo => {
		setView(changeTo);
	};
	return (
		<Container
			id="container"
			fluid
			data-bs-theme="dark"
			className="min-vh-100 min-vw-100"
		>
			<MainNav toggle={toggleView} />

			{(() => {
				switch (view) {
					case "Home":
						return <Home />;
					case "About":
						return <About />;
					case "Projects":
						return <Projects />;
					case "Contact":
						return <Contact />;
					default:
						return null;
				}
			})()}
			<GlobalFooter />
		</Container>
	);
};

export default App;
