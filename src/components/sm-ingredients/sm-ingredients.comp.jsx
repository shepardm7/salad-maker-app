import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import './sm-ingredients.styles.scss';
import IngredientListItem from "../ingredient-list-item/ingredient-list-item.comp";

const SmIngredients = ({selectedSalad, handleOnItemClick}) => {
	const [stateTabs, setStateTabs] = useState({
		lettuces: true,
		toppings: true,
		dressings: true
	});
	
	console.log('sm-ingredients', selectedSalad);
	const saladColors = {
		lettuces: '#4CAF50',
		toppings: '#FF9800',
		dressings: '#F57C00'
	};
	
	const links = [];
	const tabs = [];
	const tabPanels = [];
	
	const handleCheckClicked = (e) => {
		setStateTabs({
			...stateTabs,
			[e.target.name]: e.target.checked
		});
	};
	
	Object.keys(selectedSalad).forEach(name => {
		
		links.push(
				<label key={name}>
					<input
							type="checkbox"
							checked={stateTabs[name]}
							name={name}
							onChange={handleCheckClicked}
					/>
					{name}{" "}
				</label>
		);
		
		if (!stateTabs[name]) return;
		
		const color = saladColors[name];
		
		tabs.push(
				<Tab style={{ borderColor: color, color: color }} className={`salad-tab ${name}-tab`} key={name}>
					{name}
				</Tab>
		);
		
		tabPanels.push(
				<TabPanel style={{ borderColor: color }} className='salad-tab-panel' key={name}>
					<div className="list">
						{Object.values(selectedSalad[name]).map(item => <IngredientListItem item={item} handleOnItemClick={(itemKey) => handleOnItemClick(name, itemKey)}/>)}
					</div>
				</TabPanel>
		)
	});
	
	return (
			<div className='sm-ingredients-comp'>
				<Tabs selectedTabClassName='salad-tab--selected' selectedTabPanelClassName='salad-tab-panel--selected'>
					<TabList className='salad-tab-list'>{tabs}</TabList>
					{tabPanels}
				</Tabs>
			</div>
	);
};

SmIngredients.propTypes = {
	selectedSalad: PropTypes.object,
	handleOnItemClick: PropTypes.func.isRequired,
};

export default SmIngredients;
