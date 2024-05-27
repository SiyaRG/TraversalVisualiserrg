import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import AboutCard from "./AboutCard.jsx";
import roles from "./About.json";

const About = () => {
	const cards = Object.values(roles.roles).map(role => {
		return <AboutCard id={role.id} card={role} />;
	});

	return (
		<Container fluid className="text-center bg-body-secondary overflow-x-hidden">
			<Row id="cardScroller" className="d-flex position-absolute">
				{" "}
				<button
					id="btnLeft"
					onClick={() => {
						document.getElementById("cardList").scrollLeft -= 300;
					}}
				></button>
				<button
					id="btnRight"
					onClick={() => {
						document.getElementById("cardList").scrollLeft += 300;
					}}
				></button>
			</Row>
			<Row>
				<Col>
					<h1 className="mt-3 text-light-emphasis">About Siya</h1>
				</Col>
			</Row>
			<Row className="d-flex p-2 justify-content-center">
				<p id="aboutme">
					Versatile self-taught developer with proficiency in multiple
					languages and frameworks. Passionate about problem-solving
					and creating efficient, user-centric solutions. Seeking
					opportunities to apply my diverse skill set and contribute
					to impactful projects.
				</p>
			</Row>
			<Row
				id="cardList"
				className="d-flex flex-nowrap p-2 overflow-x-scroll m-0"
			>
				{(() => {
					return cards;
				})()}
			</Row>
		</Container>
	);
};

export default About;
