import React from 'react';
import PropTypes from 'prop-types';
import './salad-overview-item.styles.scss'

const SaladOverviewItem = ({ itemType, header, color }) => {
	const ingredients = Object.values(itemType).filter(ingredient => ingredient.checked);
	
	return (
			<div className={`salad-overview-item-comp ${header}`}>
				<div className="header-container">{header}</div>
				<div className="content">
					{ingredients.map(ingredient => (
							<span>{ingredient.name}</span>
					))}
					{!ingredients.length ? 'nothing added' : null}
				</div>
			</div>
	);
};

SaladOverviewItem.propTypes = {
	itemType: PropTypes.object.isRequired
};

export default SaladOverviewItem;
