import {favTypes} from "../types";

const addFavItem = item => dispatch => {
	dispatch({ type: favTypes.addFavItem, payload: item });
};

const removeFavItem = id => dispatch => {
	dispatch({ type: favTypes.removeFavItem, payload: id })
};

const updateFavItem = item => dispatch => {
	dispatch({ type: favTypes.updateFavItem, payload: item });
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
	clearFavs
};

export default FavActions;
