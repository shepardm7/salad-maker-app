import React from 'react';
import PropTypes from 'prop-types';
import './section-container.styles.scss';

const SectionContainer = ({ children, header }) => {
	return (
			<div className='section-container-comp right-shadow has-border'>
				<div className="section-header">
					{header}
				</div>
				{children}
			</div>
	);
};

SectionContainer.propTypes = {

};

export default SectionContainer;
