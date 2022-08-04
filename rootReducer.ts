import {combineReducers} from 'redux';
import {routeReducer} from './src/routes/RouteSlice'


export const RootReducer = combineReducers({
    route: routeReducer
});


export type RootState = ReturnType<typeof RootReducer>;