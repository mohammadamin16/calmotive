import { combineReducers } from 'redux';
import { routeReducer } from './src/routes/RouteSlice'



export const rootReducer = combineReducers({
  route: routeReducer
});

export type RootState = ReturnType<typeof rootReducer>;