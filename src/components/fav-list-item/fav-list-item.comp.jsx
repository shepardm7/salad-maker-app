import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './fav-list-item.styles.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import FavActions from "../../redux/actions/fav.actions";
import AppRouteActions from "../../redux/actions/app-route.actions";
import SaladMaker from "../salad-maker/salad-maker.comp";
import {showAlert} from "../../utils/alert";

const FavListItem = ({ item, setRoute, deleteSalad }) => {
	const { id, name, ...rest } = item;
	const lettuces = Object.values(rest.lettuces);
	const toppings = Object.values(rest.toppings);
	const dressings = Object.values(rest.dressings);
	
	const handleOnEditClick = () => {
		setRoute('saladMaker', 'Edit salad', {selectedSalad: item});
	};
	
	const handleOnDeleteClick = () => {
		showAlert({
			type: 'warning',
			title: `Are you sure you want you delete salad: ${name}`,
			confirmButtonText: 'Yes',
			cancelButtonText: 'No',
			showCancelButton: true,
			focusCancel: true
		}).then(res => {
			if (res.value) {
				deleteSalad(id);
			}
		});
	};
	
	return (
			<div className='cart-list-item-comp'>
				<div className="header-container">
					<div className='left-part'>{name}</div>
					<div className="right-part">
						<span className='edit-btn' onClick={handleOnEditClick}><FontAwesomeIcon icon={faEdit}/></span>
						<span className='delete-btn' onClick={handleOnDeleteClick}><FontAwesomeIcon icon={faTrashAlt}/></span>
					</div>
				</div>
				
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

const mapDispatchToProps = {
	setRoute: AppRouteActions.setRoute,
	deleteSalad: FavActions.removeFavItem
};

export default connect(null, mapDispatchToProps)(FavListItem);
