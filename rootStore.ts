import {RootReducer} from "./rootReducer";
import {configureStore} from "@reduxjs/toolkit";


export const rootStore = configureStore({reducer: RootReducer});