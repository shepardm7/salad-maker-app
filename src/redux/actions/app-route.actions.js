import {routeTypes} from "../types";

const routesMap = {
	fav: {
		defaultHeader: 'My Fav Salads',
		Comp: 'fav',
		defaultProps: {},
		sectionProps: {}
	},
	saladMaker: {
		defaultHeader: 'Salad maker',
		Comp: 'saladMaker',
		defaultProps: {},
		sectionProps: {}
	}
};

export const setRoute = (Comp, header, props = {}, sectionProps = {}) => dispatch => {
	dispatch({ type: routeTypes.setCurrentPage, payload: { Comp, header, props, sectionProps }});
	console.log('app route actions', AppRouteActions);
};

export const setRouteWithName = (name, props = {}, sectionProps = {}) => dispatch => {
	dispatch(setRoute(routesMap[name].Comp, routesMap[name].defaultHeader, {...routesMap[name].defaultProps, ...props}, {...routesMap[name].sectionProps, ...sectionProps}));
};

const AppRouteActions = {
	setRoute,
	setRouteWithName
};

export default AppRouteActions;
