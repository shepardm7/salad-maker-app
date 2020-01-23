import {routeTypes} from "../types";
import Fav from "../../components/fav/fav.comp";

const initialState = {
	header: 'My Fav Salads',
	Comp: Fav,
	props: {},
	sectionProps: {}
};

const AppRouteReducer = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case routeTypes.setCurrentPage:
			return {...state, currentRoute: payload};
		default:
			return state;
	}
};

export default AppRouteReducer;
