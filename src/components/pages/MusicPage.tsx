import React from "react";
import {SafeAreaView, StatusBar, StyleSheet} from "react-native";
import {Body, BodySizes, BodyWeight} from "../../UI/texts";
import {useTheme} from "../../UI/theme";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";
import {Screens} from "../../routes/RouteSlice";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {MainMenu} from "../course/MainMenu";

type Props = NativeStackScreenProps<RootStackParamList, Screens.LoginPage>;

export const MusicPage: React.FC<Props> = (props) => {
    const theme = useTheme()

    const styles = StyleSheet.create({
        page_container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: theme.main.color_1,
            alignItems: 'center',
        },


    });
    const dispatch = useDispatch()
    const navigation = useNavigation()


    return (
        <SafeAreaView style={styles.page_container}>
            <StatusBar
                animated={true}
                backgroundColor={theme.main.color_4}/>
            <Body weight={BodyWeight.Regular} size={BodySizes.Medium}>
                {"MusicPage"}
            </Body>
        </SafeAreaView>
    )
}


