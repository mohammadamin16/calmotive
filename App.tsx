import {SplashScreen} from "./src/components/pages/SplashScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {rootStore} from "./rootStore"
import {Provider, useSelector} from 'react-redux';
import {RootState} from "./rootReducer";
import {WelcomePage} from "./src/components/pages/WelcomePage";
import {Screens} from "./src/routes/RouteSlice";
import React from "react";

const Stack = createNativeStackNavigator();

const ActiveScreen: React.FC<{ screen: Screens }> = ({screen}) => {
    const activeScreen = useSelector((state: RootState) => state.route.screen)
    switch (activeScreen) {
        case Screens.SplashScreen:
            return <SplashScreen/>
        case Screens.WelComeScreen:
            return <WelcomePage/>
    }
}

const RouterContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={ActiveScreen}/>
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

