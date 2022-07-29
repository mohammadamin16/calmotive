import {SplashScreen} from "./src/components/pages/SplashScreen";
import {NavigationContainer, NavigationContext, ParamListBase, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {rootStore} from "./rootStore"
import {Provider, useSelector} from 'react-redux';
import {RootState} from "./rootReducer";
import {WelcomePage} from "./src/components/pages/WelcomePage";
import {Screens} from "./src/routes/RouteSlice";
import React, {useEffect} from "react";
import {LoginPage} from "./src/components/pages/LoginPage";
import {HomePage} from "./src/components/pages/HomePage";
import {PlayerPage} from "./src/components/pages/PlayerPage";
import {CourseDetailPage} from "./src/components/pages/CourseDetailPage";

const Stack = createNativeStackNavigator<ParamListBase>();


export type RootStackParamList = {
    [Screens.SplashScreen]: undefined;
    [Screens.WelcomeScreen]: undefined;
    [Screens.LoginPage]: undefined;
    [Screens.HomePage]: undefined;
};

const RouterContainer = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Screens.CourseDetailPage} screenOptions={{headerShown: false}}>
                <Stack.Screen name={Screens.SplashScreen} component={SplashScreen}/>
                <Stack.Screen name={Screens.WelcomeScreen} component={WelcomePage}/>
                <Stack.Screen name={Screens.LoginPage} component={LoginPage}/>
                <Stack.Screen name={Screens.HomePage} component={HomePage}/>
                <Stack.Screen name={Screens.PlayerPage} component={PlayerPage}/>
                <Stack.Screen name={Screens.CourseDetailPage} component={CourseDetailPage}/>
            </Stack.Navigator>
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

