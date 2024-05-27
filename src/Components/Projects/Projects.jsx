import React, { useState, useEffect } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import projects from "./Projects.json";
import Project from "./Project.jsx";

const Projects = () => {
    const [filter, setFilter] = useState("All");
    const [count, setCount] = useState(0);
    useEffect(() => {
        
    }, [filter]);

    return (
        <Container
            fluid
            className="text-center bg-body-secondary overflow-scroll min-vh-100"
        >
            <Row className="mb-2">
                <Col>
                    <h1 className="mt-3 text-light-emphasis">Projects</h1>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center mb-3">
                <Row className="mb-5">
                    <DropdownButton id="ddbStack" title={filter}>
                        <Dropdown.Item
                            href="#"
                            onClick={() => {
                                setFilter("All");
                            }}
                        >
                            All
                        </Dropdown.Item>
                        <Dropdown.Item
                            href="#"
                            onClick={() => {
                                setFilter("BackEnd");
                            }}
                        >
                            Back End
                        </Dropdown.Item>
                        <Dropdown.Item
                            href="#"
                            onClick={() => {
                                setFilter("FrontEnd");
                            }}
                        >
                            Front End
                        </Dropdown.Item>
                        <Dropdown.Item
                            href="#"
                            onClick={() => {
                                setFilter("FullStack");
                            }}
                        >
                            Full Stack
                        </Dropdown.Item>
                        <Dropdown.Item
                            href="#"
                            onClick={() => {
                                setFilter("Other");
                            }}
                        >
                            Other
                        </Dropdown.Item>
                    </DropdownButton>
                </Row>
                <Row className="d-flex justify-content-center p-0">
                    {(() => {
                        if (filter === "All") {
                            return Object.values(projects.projects).map(
                                project => {
                                    return <Project project={project} />;
                                }
                            );
                        } else {
                            const filteredProjects = Object.values(
                                projects.projects
                            ).filter(project => {
                                return project.stack === filter;
                            });
                            return filteredProjects.map(project => {
                                return <Project project={project} />;
                            });
                        }
                        if (count === 0) {
                            return <h2>Oops... Coming soon!</h2>;
                        }
                    })()}
                </Row>
            </Row>
        </Container>
    );
};

export default Projects;
