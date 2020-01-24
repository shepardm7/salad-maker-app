import {smTypes} from "../types";

const addLettuce = lettuceId => dispatch =>	dispatch({ type: smTypes.addLettuce, payload: lettuceId });
const addTopping = toppingId => dispatch =>	dispatch({ type: smTypes.addTopping, payload: toppingId });
const addDressing = dressingId => dispatch =>	dispatch({ type: smTypes.addDressing, payload: dressingId });

const removeLettuce = lettuceId => (dispatch, getState) => {
	const { saladMaker: { lettuces } } = getState();
	
	if (lettuces.length === 1) alert("Must have at least one lettuce");
	else dispatch({ type: smTypes.removeLettuce, payload: lettuceId });
};

const removeTopping = toppingId => dispatch => dispatch({ type: smTypes.removeTopping, payload: toppingId });
const removeDressing = dressingId => dispatch => dispatch({ type: smTypes.removeDressing, payload: dressingId });
