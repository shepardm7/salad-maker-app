import React from 'react';
import PropTypes from 'prop-types';
import './checkmark.styles.scss';

const CheckMark = props => {
	return (
			<div className='checkmark-comp'>
				<svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
					<path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
				</svg>
			</div>
	);
};

CheckMark.propTypes = {

};

export default CheckMark;
