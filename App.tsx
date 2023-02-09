import {SplashScreen} from './src/components/pages/SplashScreen';
import {NavigationContainer, ParamListBase, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {rootStore} from './rootStore';
import {Provider, useDispatch} from 'react-redux';
import {WelcomePage} from './src/components/pages/WelcomePage';
import {RouteActions, Screens} from './src/routes/RouteSlice';
import React, {useEffect, useMemo} from 'react';
import {LoginPage} from './src/components/pages/LoginPage';
import {HomePage} from './src/components/pages/HomePage';
import {PlayerPage} from './src/components/pages/PlayerPage';
import {CourseDetailPage} from './src/components/pages/CourseDetailPage';
import {MusicPage} from './src/components/pages/MusicPage';
import {MainMenu} from './src/components/MainMenu';
import {ProfilePage} from './src/components/pages/ProfilePage';
import {SearchPage} from './src/components/pages/SearchPage';
import {ChoosePlanPage} from './src/components/pages/ChoosePlanPage';
import {SuccessPaymentPage} from './src/components/pages/SuccessPaymentPage';
import * as expoSplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {usePhone} from './src/hooks/auth';
import ReactGA from 'react-ga4';
const TRACKING_ID = 'G-PQ230JH3W2'; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
const Stack = createNativeStackNavigator<ParamListBase>();
ReactGA.event({action: 'start', label: 'start_label', category: 'category_label', value: 1});
export type RootStackParamList = {
  [Screens.SplashScreen]: undefined;
  [Screens.WelcomeScreen]: undefined;
  [Screens.LoginPage]: undefined;
  [Screens.HomePage]: undefined;
};

expoSplashScreen.preventAutoHideAsync();

const RouterContainer = () => {
  useEffect(() => {
    setTimeout(() => {
      expoSplashScreen.hideAsync();
    }, 2000);
  }, []);

  const {phone} = usePhone();

  const isLoggedIn = useMemo(() => Boolean(phone), [phone]);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.SplashScreen} screenOptions={{headerShown: false}}>
        <Stack.Screen name={Screens.SplashScreen} component={SplashScreen} />
        <Stack.Screen name={Screens.WelcomeScreen} component={WelcomePage} />
        <Stack.Screen name={Screens.LoginPage} component={LoginPage} />
        <Stack.Screen name={Screens.HomePage} component={HomePage} />
        <Stack.Screen name={Screens.PlayerPage} component={PlayerPage} />
        <Stack.Screen name={Screens.CourseDetailPage} component={CourseDetailPage} />
        <Stack.Screen name={Screens.MusicPage} component={MusicPage} />
        <Stack.Screen name={Screens.ProfilePage} component={ProfilePage} />
        <Stack.Screen name={Screens.SearchPage} component={SearchPage} />
        <Stack.Screen name={Screens.ChoosePlanPage} component={ChoosePlanPage} />
        <Stack.Screen name={Screens.SuccessPaymentPage} component={SuccessPaymentPage} />
      </Stack.Navigator>
      <MainMenu />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={rootStore}>
      <RouterContainer />
    </Provider>
  );
}
