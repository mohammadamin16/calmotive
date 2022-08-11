import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ImageSourcePropType} from "react-native";

export interface CourseState {
    active_filter: number | undefined
}

const initialState: CourseState = {
    active_filter: undefined
};

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        set_filter(state, action: PayloadAction<number>) {
            state.active_filter = action.payload
        },
    },
})

export const CourseActions = courseSlice.actions
export const courseReducer = courseSlice.reducer