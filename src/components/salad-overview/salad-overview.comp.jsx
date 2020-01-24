import React from 'react';
import PropTypes from 'prop-types';
import './salad-overview.styles.scss';
import SaladOverviewItem from "../salad-overview-item/salad-overview-item.comp";

const SaladOverview = ({ selectedSalad, saladColors }) => {
	const { id, name, ...rest } = selectedSalad;
	return (
			<div className='salad-overview-comp'>
				{Object.keys(rest).map(key => (
						<SaladOverviewItem itemType={selectedSalad[key]} header={key} color={saladColors[key]} />
				))}
			</div>
	);
};

SaladOverview.propTypes = {
	selectedSalad: PropTypes.object.isRequired
};

export default SaladOverview;
