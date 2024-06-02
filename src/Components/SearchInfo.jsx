import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const SearchInfo = ({ algorithm }) => {
    return (
        <Form id="searchInfo" className="text-center">
            <Row className="d-flex justify-content-center mb-2">
                <Form.Group>
                    <p>
                        <span>{algorithm.name}</span> {algorithm.description}
                    </p>
                </Form.Group>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col>
                    <p>
                        Time Complexity: {algorithm.timeComplexity}
                    </p>
                </Col>
                <Col>
                    <p>
                        Space Complexity: {algorithm.spaceComplexity}
                    </p>
                </Col>
                <Col>
                    <p>
                        Traversal Type: {algorithm.traversalType}
                    </p>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchInfo;
