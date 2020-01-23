import React from 'react';
import PropTypes from 'prop-types';
import './button.styles.scss';

const Button = ({ label, onClick, color, isInverse }) => {
	const btnClass = () => {
		let cls = 'button-comp';
		if (isInverse) {
			cls += ' is-inverse';
		}
		switch (color) {
			case 'danger':
				cls += ' color-danger';
			default:
				cls += ' color-default';
		}
		return cls;
	};
	
	return (
			<button className={btnClass()} onClick={onClick}>
				{/*<div className="overlay" />*/}
				{label}
			</button>
	);
};

Button.defaultProps = {
	color: 'default',
	isInverse: false
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	color: PropTypes.string,
	isInverse: PropTypes.bool
};

export default Button;
