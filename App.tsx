import {SplashScreen} from "./src/components/pages/SplashScreen";
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {rootStore} from "./rootStore"
import {Provider, useDispatch} from 'react-redux';
import {WelcomePage} from "./src/components/pages/WelcomePage";
import {RouteActions, Screens} from "./src/routes/RouteSlice";
import React from "react";
import {LoginPage} from "./src/components/pages/LoginPage";
import {HomePage} from "./src/components/pages/HomePage";
import {PlayerPage} from "./src/components/pages/PlayerPage";
import {CourseDetailPage} from "./src/components/pages/CourseDetailPage";
import {MusicPage} from "./src/components/pages/MusicPage";
import {MainMenu} from "./src/components/course/MainMenu";
import {ProfilePage} from "./src/components/pages/ProfilePage";
import {SearchPage} from "./src/components/pages/SearchPage";

const Stack = createNativeStackNavigator<ParamListBase>();


export type RootStackParamList = {
    [Screens.SplashScreen]: undefined;
    [Screens.WelcomeScreen]: undefined;
    [Screens.LoginPage]: undefined;
    [Screens.HomePage]: undefined;
};

const RouterContainer = () => {
    const dispatch = useDispatch();
    dispatch(RouteActions.setActiveScreen(Screens.HomePage))
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Screens.HomePage} screenOptions={{headerShown: false}}>
                <Stack.Screen name={Screens.SplashScreen} component={SplashScreen}/>
                <Stack.Screen name={Screens.WelcomeScreen} component={WelcomePage}/>
                <Stack.Screen name={Screens.LoginPage} component={LoginPage}/>
                <Stack.Screen name={Screens.HomePage} component={HomePage}/>
                <Stack.Screen name={Screens.PlayerPage} component={PlayerPage}/>
                <Stack.Screen name={Screens.CourseDetailPage} component={CourseDetailPage}/>
                <Stack.Screen name={Screens.MusicPage} component={MusicPage}/>
                <Stack.Screen name={Screens.ProfilePage} component={ProfilePage}/>
                <Stack.Screen name={Screens.SearchPage} component={SearchPage}/>
            </Stack.Navigator>
            <MainMenu/>
        </NavigationContainer>
    )
}

export default function App() {
    return (
        <Provider store={rootStore}>
            <RouterContainer/>
        </Provider>
    );
}

