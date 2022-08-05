import React from "react";
import {TouchableOpacity, View} from "react-native";
import {Body, BodySizes, BodyWeight} from "../../UI/texts";
import {useTheme} from "../../UI/theme";
import {useNavigation} from "@react-navigation/native";
import {RouteActions, Screens} from "../../routes/RouteSlice";
import {useDispatch} from "react-redux";


interface MenuItemProps {
    full_width?: boolean;
}

export const Episode: React.FC<MenuItemProps> = (props) => {
    const theme = useTheme()
    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <TouchableOpacity
            style={{
                width: "100%",
                flexDirection: "row",
                marginBottom: 40,
                alignItems: "center"
            }}
            onPress={() => {
                dispatch(RouteActions.setActiveScreen(Screens.PlayerPage))
                navigation.navigate(Screens.PlayerPage)
            }}
        >
            <Body weight={BodyWeight.Regular} size={BodySizes.Medium} style={{opacity: 0.5}}>
                {"6 دقیقه"}
            </Body>
            <View style={{
                flex: 1,
                alignItems: 'center'
            }}>

                <Body weight={BodyWeight.Regular} size={BodySizes.Large}>
                    {"به کالموتیو خوش آمدید."}
                </Body>
            </View>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 45,
                    height: 45,
                    backgroundColor: theme.main.color_5,
                    borderRadius: 100
                }}
            >
                <Body weight={BodyWeight.Regular} size={BodySizes.Medium}
                      style={{color: theme.alternative.white}}>1</Body>
            </View>

        </TouchableOpacity>
    )
}
