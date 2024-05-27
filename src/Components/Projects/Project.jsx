import React from "react";
import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap";

const Project = ({ project }) => {
    const aboutImage = require(`../../Resources/Images/${project.image}`);
    const technologies = project.icons.map(technology => {
        const i = require(`../../Resources/Icons/${technology}`);
        return <img className="tech" href="#" src={i} />;
    });

    return (
        <Col className="d-flex justify-content-around mt-3">
            <Container
                fluid
                className="d-flex align-items-center justify-content-around  mb-3 border-success"
            >
                <Card
                    className="card"
                    style={{ width: "18rem", height: "30rem" }}
                >
                    <Card.Img
                        style={{ height: "18rem" }}
                        variant="top"
                        src={aboutImage}
                    />
                    <Card.Body className="d-flex flex-column align-items-center">
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
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

export default Project;
