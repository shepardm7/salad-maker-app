import {favTypes} from "../types";

const initialState = {
	list: [],
};

const FavReducer = (state = initialState, { type, payload }) => {
	switch(type) {
		case favTypes.addFavItem:
			return { ...state, list: [...state.list, payload] };
		case favTypes.removeFavItem:
			return { ...state, list: state.list.filter(item => item.id !== payload) };
		case favTypes.clearFavs:
			return { ...state, list: [] };
		case favTypes.updateFavItem:
			return { ...state, list: state.list.map(item => item.id === payload.id ? payload : item) };
		default:
			return state;
	}
};

export default FavReducer;
