import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum Screens {
    SplashScreen = "SplashScreen",
    WelcomeScreen = "WelcomeScreen",
    LoginPage = "LoginPage",
    HomePage = "HomePage",
    PlayerPage = "PlayerPage",
    CourseDetailPage = "CourseDetailPage",
    MusicPage = "MusicPage",
    ProfilePage = "ProfilePage",
    SearchPage = "SearchPage",
}

interface RouteState {
    screen: Screens
}

const initialState: RouteState = {
    screen: Screens.SplashScreen
};

const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        setActiveScreen(state, action: PayloadAction<Screens>) {
            state.screen = action.payload
        },
    },
})

export const RouteActions = routeSlice.actions
export const routeReducer = routeSlice.reducer