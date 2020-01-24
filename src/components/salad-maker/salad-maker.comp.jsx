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
import {showTextAlert, showToast} from "../../utils/alert";
import FavActions, {parseSalad} from "../../redux/actions/fav.actions";
import mergeObj from 'lodash.merge';

const SaladMaker = ({ setRouteWithName, selectedSalad, addOrUpdateSalad }) => {
	console.log('AppRouteActions', AppRouteActions);
	
	
	const [selectedSaladCopy, setSelectedSaladCopy] = useState(mergeObj(JSON.parse(JSON.stringify(ingredients)), JSON.parse(JSON.stringify(selectedSalad))));
	
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
				if (count === 1) {
					showToast({ icon: 'warning', title: 'Must have at least 1 base for your salad!'});
					return;
				}
				doOnSelect();
			} else {
				doOnSelect()
			}
		} else doOnSelect();
	};
	
	const handleAddSaladClick = () => {
		showTextAlert(selectedSaladCopy.name).then(value => {
			if (value === undefined) return;
			addOrUpdateSalad({ ...selectedSaladCopy, name: value });
			setRouteWithName('fav');
		});
	};
	
	return (
			<div className='salad-maker-comp'>
				
				<SmIngredients selectedSalad={selectedSaladCopy} handleOnItemClick={handleOnOptionSelect} saladColors={saladColors} />
				<SaladOverview selectedSalad={selectedSaladCopy} saladColors={saladColors} />
				<SectionFooter>
					<Button label='Cancel' onClick={() => setRouteWithName('fav')} isInverse color='danger'/>
					<Button label={selectedSaladCopy.id ? 'Update Salad' : 'Add Salad'} onClick={() => handleAddSaladClick()} />
				</SectionFooter>
			</div>
	);
};

SaladMaker.defaultProps = {
	selectedSalad: {
		id: null,
		name: ''
	}
};

SaladMaker.propTypes = {
	selectedSalad: PropTypes.object
};

const mapDispatchToProps = {
	setRouteWithName: setRouteWithName,
	addOrUpdateSalad: FavActions.addOrUpdateItem
};

export default connect(null, mapDispatchToProps)(SaladMaker);
