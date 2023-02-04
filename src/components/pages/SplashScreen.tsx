import React, {useEffect, useMemo} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {strings} from '../../assets/strings';
import logo from '../../assets/images/logo.png';
import {useFonts} from 'expo-font';
import {useDispatch} from 'react-redux';
import {RouteActions, Screens} from '../../routes/RouteSlice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {usePhone} from '../../hooks/auth';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, Screens.SplashScreen>;

export const SplashScreen = ({navigation}: Props) => {
  let [fontsLoaded] = useFonts({
    regular: require('../../assets/fonts/Estedad-FD-Regular.ttf'),
  });

  const {phone, isLoading} = usePhone();

  const isLoggedIn = useMemo(() => Boolean(phone), [phone]);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('isLoggedIn', isLoggedIn);
    if (isLoading) return;
    if (isLoggedIn) {
      navigation.navigate(Screens.HomePage);
      dispatch(RouteActions.setActiveScreen(Screens.HomePage));
    } else {
      navigation.navigate(Screens.WelcomeScreen);
      dispatch(RouteActions.setActiveScreen(Screens.WelcomeScreen));
    }
  }, [isLoggedIn, isLoading]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(RouteActions.setActiveScreen(Screens.WelcomeScreen));
  //     navigation.navigate(Screens.WelcomeScreen);
  //   }, 3000);
  // }, []);
  //
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <View style={styles.page_container}>
        <Image style={styles.logo} source={logo} />
        <Text style={{fontFamily: 'regular'}}>{strings.calmotive}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  page_container: {
    flex: 1,
    backgroundColor: '#F8B195',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});
