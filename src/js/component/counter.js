import React from "react";
import PropTypes from "prop-types";

export function Counter(props) {
	return (
		<div className="p-2 bg-dark text-white m-1 d-flex justify-content-center align-items-center">
			<h3>{props.number}</h3>
		</div>
	);
}

Counter.propTypes = {
	number: PropTypes.number
};
