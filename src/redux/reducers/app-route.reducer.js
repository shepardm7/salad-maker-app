import {routeTypes} from "../types";

const initialState = {
	header: 'My Fav Salads',
	Comp: 'fav',
	props: {},
	sectionProps: {}
};

const AppRouteReducer = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case routeTypes.setCurrentPage:
			return {...state, ...payload};
		default:
			return state;
	}
};

export default AppRouteReducer;
