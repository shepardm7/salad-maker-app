import React from 'react';
import PropTypes from 'prop-types';
import './section-footer.styles.scss';

const SectionFooter = ({ children }) => {
	return (
			<div className='section-footer-comp'>
				{children}
			</div>
	);
};

SectionFooter.propTypes = {

};

export default SectionFooter;
