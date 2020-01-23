import {routeTypes} from "../types";
import Fav from "../../components/fav/fav.comp";
import SaladMaker from "../../components/salad-maker/salad-maker.comp";

const routesMap = {
	fav: {
		defaultHeader: 'My Fav Salads',
		Comp: Fav,
		defaultProps: {},
		sectionProps: {}
	},
	saladMaker: {
		defaultHeader: 'Salad maker',
		Comp: SaladMaker,
		defaultProps: {},
		sectionProps: {}
	}
};

const setRoute = (Comp, header, props = {}, sectionProps = {}) => dispatch => {
	dispatch({ type: routeTypes.setCurrentPage, payload: { Comp, header, props, sectionProps }});
};

const setRouteWithName = (name, props) => dispatch => {
	dispatch(setRoute(routesMap[name].Comp, routesMap[name].defaultHeader, {...routesMap[name].defaultProps, ...props}, routesMap[name].sectionProps));
};

const AppRouteActions = {
	setRoute,
	setRouteWithName
};

export default AppRouteActions;
