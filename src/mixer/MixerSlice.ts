import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ImageSourcePropType} from "react-native";


export interface Track {
    title: string,
    id: number,
    track_url: string,
    logo_url: string | ImageSourcePropType,
    is_active?: boolean,
}

export interface MixerState {
    tracks: Track[],
    active_tracks: number[],
}

const initialState: MixerState = {
    tracks:[],
    active_tracks: [],
};

const mixerSlice = createSlice({
    name: 'mixer',
    initialState,
    reducers: {
        set_tracks(state, action: PayloadAction<Track[]>) {
            state.tracks = action.payload
        },
        activate(state, action: PayloadAction<number>) {
            state.active_tracks.push(action.payload)
        },
        deactivate(state, action: PayloadAction<number>) {
            state.active_tracks.filter(id => id !== action.payload)
        },
    },
})

export const MixerActions = mixerSlice.actions
export const mixerReducer = mixerSlice.reducer