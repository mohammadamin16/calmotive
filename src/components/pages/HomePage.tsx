import React from "react";
import {SafeAreaView, StatusBar, StyleSheet} from "react-native";
import {Body, BodySizes, BodyWeight} from "../../UI/texts";
import {useTheme} from "../../UI/theme";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";
import {Screens} from "../../routes/RouteSlice";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, Screens.LoginPage>;

export const HomePage: React.FC<Props> = (props) => {
    const theme = useTheme()

    const styles = StyleSheet.create({
        page_container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: theme.main.color_1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        header: {
            position: "absolute",
            top: 0,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.main.color_4,
            borderBottomRightRadius: 25,
            borderBottomLeftRadius: 25,
            // height: 56,
            width: "100%"
        },

    });
    const dispatch = useDispatch()
    const navigation = useNavigation()


    return (
        <SafeAreaView style={styles.page_container}>
            <StatusBar
                animated={true}
                backgroundColor={theme.main.color_4}
                hidden={false}/>
           <Body weight={BodyWeight.Regular} size={BodySizes.Large}>
               {"HomePage"}
           </Body>
        </SafeAreaView>
    )
}


