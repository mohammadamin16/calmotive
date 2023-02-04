import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ImageSourcePropType} from 'react-native';
import {CourseProps} from '../components/course/Course';

export interface CourseState {
  active_filter: number | undefined;
  selectedCourse: CourseProps | undefined;
  selected_episode_id: undefined | number;
  selected_episode_title: undefined | string;
}

const initialState: CourseState = {
  active_filter: undefined,
  selectedCourse: undefined,
  selected_episode_id: undefined,
  selected_episode_title: undefined,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    set_filter(state, action: PayloadAction<number>) {
      state.active_filter = action.payload;
    },
    set_selected_course(state, action: PayloadAction<CourseProps>) {
      state.selectedCourse = action.payload;
    },
    set_selected_episode_id(state, action: PayloadAction<number>) {
      state.selected_episode_id = action.payload;
    },
    set_selected_title(state, action: PayloadAction<string>) {
      state.selected_episode_title = action.payload;
    },
  },
});

export const CourseActions = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
