import {smTypes} from "../types";

const initialState = {
	lettuces: ['1a'],
	toppings: [],
	dressings: []
};

const SaladMakerReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case smTypes.addLettuce:
			return {...state, lettuces: [...state.lettuces, payload]};
		case smTypes.addTopping:
			return {...state, toppings: [...state.toppings, payload]};
		case smTypes.addDressing:
			return {...state, dressings: [...state.dressings, payload]};
		case smTypes.removeLettuce:
			return {...state, lettuces: state.lettuces.filter(lettuce => lettuce !== payload)};
		case smTypes.removeTopping:
			return {...state, toppings: state.toppings.filter(topping => topping !== payload)};
		case smTypes.removeDressing:
			return {...state, dressings: state.dressings.filter(dressing => dressing !== payload)};
		default:
			return state;
	}
};

export default SaladMakerReducer;
