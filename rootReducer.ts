import {combineReducers} from 'redux';
import {routeReducer} from './src/routes/RouteSlice'
import {mixerReducer} from "./src/mixer/MixerSlice";


export const RootReducer = combineReducers({
    route: routeReducer,
    mixer: mixerReducer,
});


export type RootState = ReturnType<typeof RootReducer>;