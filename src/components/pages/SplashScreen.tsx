import React, {useEffect} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {strings} from "../../assets/strings";
import logo from '../../assets/images/logo.png';
import {useFonts} from 'expo-font';
import {useDispatch} from "react-redux";
import {RouteActions, Screens} from "../../routes/RouteSlice";


export const SplashScreen: React.FC = (props) => {
    let [fontsLoaded] = useFonts({
        'regular': require('../../assets/fonts/Estedad-FD-Regular.ttf'),
    });
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => dispatch(RouteActions.setActiveScreen(Screens.WelComeScreen)), 300)
    }, [])

    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    } else {
        return <View style={styles.page_container}>
            <Image style={styles.logo} source={logo}/>
            <Text style={{fontFamily: 'regular'}}>
                {strings.calmotive}
            </Text>
        </View>
    }
}

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
    }
});


