import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import './salad-maker.styles.scss';
import SectionFooter from "../section-footer/section-footer.comp";
import Button from "../button/button.comp";
import AppRouteActions, {setRouteWithName} from "../../redux/actions/app-route.actions";
import SmIngredients from "../sm-ingredients/sm-ingredients.comp";
import {ingredients} from "../../data/data-store";
import SaladOverview from "../salad-overview/salad-overview.comp";

const SaladMaker = ({ setRouteWithName, selectedSalad }) => {
	console.log('AppRouteActions', AppRouteActions);
	
	const [selectedSaladCopy, setSelectedSaladCopy] = useState({...JSON.parse(JSON.stringify(ingredients)), ...JSON.parse(JSON.stringify(selectedSalad)) });
	
	useEffect(() => {
	
	}, []);
	
	const saladColors = {
		lettuces: '#4CAF50',
		toppings: '#FF9800',
		dressings: '#F57C00'
	};
	
	const handleOnOptionSelect = (key, itemKey) => {
		const doOnSelect = () => {
			setSelectedSaladCopy({
				...selectedSaladCopy,
				[key]: {
					...selectedSaladCopy[key],
					[itemKey]: {
						...selectedSaladCopy[key][itemKey],
						checked: !selectedSaladCopy[key][itemKey].checked
					}
				}
			});
		};
		
		if (key === 'lettuces') {
			let count = 0;
			Object.values(selectedSaladCopy.lettuces).forEach(item => {
				if (item.checked) count += 1;
			});
			if (selectedSaladCopy[key][itemKey].checked) {
				if (count === 1) return;
				doOnSelect();
			} else {
				doOnSelect()
			}
		} else doOnSelect();
	};
	
	return (
			<div className='salad-maker-comp'>
				
				<SmIngredients selectedSalad={selectedSaladCopy} handleOnItemClick={handleOnOptionSelect} saladColors={saladColors} />
				<SaladOverview selectedSalad={selectedSaladCopy} saladColors={saladColors} />
				<SectionFooter>
					<Button label='Cancel' onClick={() => setRouteWithName('fav')} isInverse />
				</SectionFooter>
			</div>
	);
};

SaladMaker.defaultProps = {
	selectedSalad: {
		id: null
	}
};

SaladMaker.propTypes = {
	selectedSalad: PropTypes.object
};

const mapDispatchToProps = {
	setRouteWithName: setRouteWithName
};

export default connect(null, mapDispatchToProps)(SaladMaker);
