import React from 'react';
import PropTypes from 'prop-types';
import './button.styles.scss';
import ReactTooltip from 'react-tooltip';

const Button = ({label, onClick, color, isInverse, disabled}) => {
	const btnClass = () => {
		let cls = 'button-comp';
		if (isInverse) {
			cls += ' is-inverse';
		}
		if (disabled) cls += ' disabled';
		switch (color) {
			case 'danger':
				cls += ' color-danger';
			default:
				cls += ' color-default';
		}
		return cls;
	};
	
	return (
			<React.Fragment>
				
				<button className={btnClass()} onClick={onClick} data-tip data-for='add-btn'>
					{/*<div className="overlay" />*/}
					{label}
				</button>
				{disabled ? (
						<ReactTooltip id='add-btn' place="top" type="light" effect="solid">
							<span>Can&apos;t add more than 3 salads</span>
						</ReactTooltip>
				) : null}
			</React.Fragment>
	);
};

Button.defaultProps = {
	color: 'default',
	isInverse: false,
	disabled: false
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	color: PropTypes.string,
	isInverse: PropTypes.bool,
	disabled: PropTypes.bool
};

export default Button;
