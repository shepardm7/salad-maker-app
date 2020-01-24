import React from 'react';
import PropTypes from 'prop-types';
import './fav-list-item.styles.scss';

const FavListItem = ({ item, favListItemOnClick }) => {
	const { id, name, ...rest } = item;
	const lettuces = Object.values(rest.lettuces);
	const toppings = Object.values(rest.toppings);
	const dressings = Object.values(rest.dressings);
	return (
			<div className='cart-list-item-comp'>
				<div className="header-container">{name}</div>
				<div className="content">
					<b>Lettuces: </b>
					{lettuces.map(ingredient => (
							<span>{ingredient.name}</span>
					))}
					<b><br/>Toppings: </b>
					{toppings.map(ingredient => (
							<span>{ingredient.name}</span>
					))}
					{toppings.length ? null : '_'}
					<b><br/>Dressings: </b>
					{dressings.map(ingredient => (
							<span>{ingredient.name}</span>
					))}
					{dressings.length ? null : '_'}
				</div>
			</div>
	);
};

FavListItem.propTypes = {
	item: PropTypes.object.isRequired
};

export default FavListItem;
