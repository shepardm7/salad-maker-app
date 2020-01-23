import React from 'react';
import PropTypes from 'prop-types';
import './fav-list-item.styles.scss';

const CartListItem = ({ item }) => {
	return (
			<div className='cart-list-item-comp'>
				{item.name}
			</div>
	);
};

CartListItem.propTypes = {
	item: PropTypes.object.isRequired
};

export default CartListItem;
