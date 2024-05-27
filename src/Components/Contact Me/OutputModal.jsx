import React, { Fragment, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
const OutputModal = ({ show, handleClose, error, loading }) => {
	const Body = () => {
		if (error === null) {
			return (
				<Modal.Body>
					<p>
						Your feedback has been successfully receiced. Thank you
						for getting in touch!
					</p>
				</Modal.Body>
			);
		} else {
			return (
				<Modal.Body>
					<p>Oops!! {error.messages}</p>
				</Modal.Body>
			);
		}
	};

	return (
		<Fragment>
			<Modal
				id="out"
				data-bs-theme="dark"
				show={show}
				contentClassName={(() => {
					return error === null ? "border-success" : "border-danger";
				})()}
				centered
			>
				<Modal.Header>
					<Modal.Title>
						{(() => {
							return error === null ? "Success" : "Oops!!";
						})()}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						{(() => {
							if (error !== null) {
							}
							return error !== null
								? error.message
								: `Thank you for getting in touch.\n
								I look forward to your comment!`;
						})()}
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="info" onClick={handleClose}>
						Ok
					</Button>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
};

export default OutputModal;
