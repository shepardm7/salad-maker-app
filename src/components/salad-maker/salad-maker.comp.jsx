import React from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import './salad-maker.styles.scss';
import SectionFooter from "../section-footer/section-footer.comp";
import Button from "../button/button.comp";
import AppRouteActions, {setRouteWithName} from "../../redux/actions/app-route.actions";

const SaladMaker = ({ setRouteWithName }) => {
	console.log('AppRouteActions', AppRouteActions);
	return (
			<div className='salad-maker-comp'>
				salad maker
				
				<SectionFooter>
					<Button label='Cancel' onClick={() => setRouteWithName('fav')} isInverse />
				</SectionFooter>
			</div>
	);
};

SaladMaker.propTypes = {

};

const mapDispatchToProps = {
	setRouteWithName: setRouteWithName
};

export default connect(null, mapDispatchToProps)(SaladMaker);
