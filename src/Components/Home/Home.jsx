import React from "react";
import HomeImage from "./HomeImage.jsx";
import HomeInfo from "./HomeInfo.jsx";

import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";

const Home = () => {
	return (
		<Container fluid className="text-center bg-body-secondary">
			<Row className="mb-5">
				<Col>
					<h1 className="mt-3 text-light-emphasis">Home</h1>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col sm>
					<HomeInfo />
				</Col>

				<Col sm id="imgCol">
					<HomeImage />
				</Col>
			</Row>
			<Row>
				<Col>
					<Row className="d-flex justify-content-center">
						<Button
							id="downloadCV"
							className="b-accent br-accent mt-3 mb-3 text-light-emphasis Btn"
							onClick ={()=>{
							  window.location.href="https://drive.google.com/file/d/14WyVFd3RJkY-oOS7_TZj5ZMnAv3-4hq3/uc?export=download"
							}}
						>
							Download CV
						</Button>
					</Row>
				</Col>
				<Col sm></Col>
			</Row>
		</Container>
	);
};

export default Home;
