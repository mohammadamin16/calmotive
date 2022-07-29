import React from "react"
import {StyleProp, Text, TextStyle} from "react-native";
import {useFonts} from "expo-font";


export enum BodySizes {
    XXSmall = 5,
    XSmall = 7,
    Small = 10,
    Medium = 15,
    Large = 20,
    XLarge = 25,
    XXLarge = 30,
}

export enum BodyWeight {
    ExtraLight = "ExtraLight",
    Thin = "Thin",
    Light = "Light",
    Regular = "Regular",
    Medium = "Medium",
    SemiBold = "SemiBold",
    Bold = "Bold",
    ExtraBold = "ExtraBold",
    Black = "Black",
}

const Fonts = {
    [BodyWeight.ExtraBold]: require('../assets/fonts/Estedad-FD-ExtraBold.ttf'),
    [BodyWeight.Thin]: require('../assets/fonts/Estedad-FD-Thin.ttf'),
    [BodyWeight.Light]: require('../assets/fonts/Estedad-FD-Light.ttf'),
    [BodyWeight.Regular]: require('../assets/fonts/Estedad-FD-Regular.ttf'),
    [BodyWeight.Medium]: require('../assets/fonts/Estedad-FD-Medium.ttf'),
    [BodyWeight.SemiBold]: require('../assets/fonts/Estedad-FD-SemiBold.ttf'),
    [BodyWeight.Bold]: require('../assets/fonts/Estedad-FD-Bold.ttf'),
    [BodyWeight.ExtraLight]: require('../assets/fonts/Estedad-FD-ExtraLight.ttf'),
    [BodyWeight.Black]: require('../assets/fonts/Estedad-FD-Black.ttf'),
}

interface BodyProps {
    weight: BodyWeight,
    size: BodySizes,
    color?: string,
    style?: StyleProp<TextStyle>
}

export const Body: React.FC<BodyProps> = ({
                                              size,
                                              weight,
                                              color = 'black',
                                              style,
                                              children
                                          }) => {
    let [fontsLoaded] = useFonts(Fonts);
    if (!fontsLoaded) return <Text>Loading...</Text>
    else {
        return fontsLoaded &&
			<Text style={[{fontFamily: weight, color: color, fontSize: size}, style]}> {children}</Text>
    }
}








