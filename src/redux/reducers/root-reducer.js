import AppRouteReducer from "./app-route.reducer";
import {combineReducers} from "redux";
import FavReducer from "./fav.reducer";

const RootReducer = combineReducers({
	appRoute: AppRouteReducer,
	fav: FavReducer
});

export default RootReducer;
