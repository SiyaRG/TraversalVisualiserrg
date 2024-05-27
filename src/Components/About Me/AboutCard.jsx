import React from "react";
import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap";

const AboutCard = ({ card }) => {
	const aboutImage = require(`../../Resources/Images/${card.image}`);
	const technologies = card.technologies.map(technology => {
		const i = require(`../../Resources/Icons/${technology}`);
		return <img className="tech" href="#" src={i} />;
	});

	return (
		<Col className="d-flex justify-content-around mt-3">
			<Container
				fluid
				className="d-flex align-items-center justify-content-around m-0 border-success"
			>
				<Card className= "card" style={{ width: "18rem", height: "34rem" }}>
					<Card.Img
						style={{ height: "13rem" }}
						variant="top"
						src={aboutImage}
					/>
					<Card.Body className="d-flex flex-column align-items-center bg-danger-subtle">
						<Card.Title>{card.name}</Card.Title>
						<Card.Text>{card.description}</Card.Text>
						<Button id="btnGit" className="btn"></Button>
					</Card.Body>
					<Card.Footer className="d-flex justify-content-center">
						<Row>
							<Nav>
								{(() => {
									return technologies;
								})()}
							</Nav>
						</Row>
					</Card.Footer>
				</Card>
			</Container>
		</Col>
	);
};

export default AboutCard;
