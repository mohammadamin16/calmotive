import {combineReducers} from 'redux';
import {routeReducer} from './src/routes/RouteSlice'
import {mixerReducer} from "./src/mixer/MixerSlice";
import {courseReducer} from "./src/course/CourseSlice";


export const RootReducer = combineReducers({
    route: routeReducer,
    mixer: mixerReducer,
    course: courseReducer,
});


export type RootState = ReturnType<typeof RootReducer>;