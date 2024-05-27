import React from "react";
import "./index.css";

const Spinner = ({ show }) => {
	const display = () => {
		if (show) {
			return "lds-spinner";
		} else {
			return "lds-spinner none";
		}
	};
	return (
		<div className={display()}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Spinner;
