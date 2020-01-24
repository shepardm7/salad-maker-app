import React, { useEffect } from 'react';
import {connect} from "react-redux";

import PropTypes from 'prop-types';
import './fav.styles.scss';
import Button from "../button/button.comp";
import SectionFooter from "../section-footer/section-footer.comp";
import AppRouteActions from "../../redux/actions/app-route.actions";
import FavList from "../fav-list/fav-list.comp";

const Fav = ({ setRouteWithName, favList }) => {
	useEffect(() => {
		console.log('favList', favList);
	}, []);
	
	const handleOnFavListItemClick = (favItem) => {
		console.log(favItem);
	};
	return (
			<div className='fav-comp'>
				<div className="list-container">
					<FavList favListItemOnClick={handleOnFavListItemClick} favList={favList} />
				</div>
				{/*<div className="section-footer cart-footer">*/}
				{/*	<Button label="Add" onClick={() => {}} color='danger' isInverse />*/}
				{/*</div>*/}
				<SectionFooter>
					<Button label="Cancel" onClick={''} isInverse />
					<Button label="Add Salad" onClick={() => setRouteWithName('saladMaker')} />
				</SectionFooter>
			</div>
	);
};

Fav.propTypes = {

};

const mapStateToProps = ({ fav }) => ({
	favList: fav.list
});

const mapDispatchToProps = {
	setRouteWithName: AppRouteActions.setRouteWithName
};

export default connect(mapStateToProps, mapDispatchToProps)(Fav);
