import React from 'react';
import PropTypes from 'prop-types';
import FavListItem from "../fav-list-item/fav-list-item.comp";
import './fav-list.styles.scss';

const FavList = ({ favList }) => {
	return (
			<div className={`fav-list-comp ${!favList.length ? 'flex' : ''}`}>
				{ favList.length === 0 ? <div className='no-salad-label'>Your favorites list is empty. <br/><span>You can add up to 3 salads...</span></div> : null}
				{ favList.map(favItem => (
						<FavListItem item={favItem} />
				))}
			</div>
	);
};

FavList.propTypes = {
	favList: PropTypes.array.isRequired
};

export default FavList;
