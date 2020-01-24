import React from 'react';
import PropTypes from 'prop-types';
import './ingredient-list-item.styles.scss';
import CheckMark from "../checkmark/checkmark.comp";

const IngredientListItem = ({item, handleOnItemClick}) => {
	console.log('item', item.name, item.checked);
	const { img, name } = item;
	return (
			<div className='ingredient-list-item-comp' onClick={() => handleOnItemClick(item.id)}>
				<div className='left-part'>
					<div className="img-container" style={{backgroundImage: `url(${img})`}}/>
					<span className="name">{name}</span></div>
				<div className='right-part'>{item.checked ? <CheckMark/> : null}</div>
			</div>
	);
};

IngredientListItem.propTypes = {
	item: PropTypes.object.isRequired
};

export default IngredientListItem;
