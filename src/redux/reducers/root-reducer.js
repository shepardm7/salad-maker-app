import AppRouteReducer from "./app-route.reducer";
import {combineReducers} from "redux";

const RootReducer = combineReducers({
	appRoute: AppRouteReducer
});

export default RootReducer;
