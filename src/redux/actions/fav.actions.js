import {favTypes} from "../types";
import uuid from "uuid/v1";

export const parseSalad = salad => {
	const { id, name, ...rest } = salad;
	Object.keys(rest).forEach(key => {
		let temp = {};
		Object.keys(rest[key]).forEach(key2 => {
			if (rest[key][key2].checked) temp = { ...temp, [key2]: rest[key][key2] };
		});
		rest[key] = temp;
	});
	return ({ id, name, ...rest });
};

const addOrUpdateItem = salad => dispatch => {
	const { id } = salad;
	dispatch( id ? updateFavItem(salad) : addFavItem(salad));
};

const addFavItem = salad => dispatch => {
	salad.id = uuid();
	dispatch({ type: favTypes.addFavItem, payload: parseSalad(salad) });
};

const removeFavItem = id => dispatch => {
	dispatch({ type: favTypes.removeFavItem, payload: id })
};

const updateFavItem = salad => dispatch => {
	dispatch({ type: favTypes.updateFavItem, payload: parseSalad(salad) });
};

const clearFavs = () => dispatch => {
	dispatch({ type: favTypes.clearFavs });
};

const getParsedFavList = () => (dispatch, getState) => {
	const { fav: { list } } = getState();
	
};

const FavActions = {
	addFavItem,
	removeFavItem,
	updateFavItem,
	addOrUpdateItem,
	clearFavs
};

export default FavActions;
