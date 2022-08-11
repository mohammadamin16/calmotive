import React from "react";
import {SafeAreaView, StatusBar, StyleSheet, TextInput, View} from "react-native";
import {Body, BodySizes, BodyWeight} from "../../UI/texts";
import {useTheme} from "../../UI/theme";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";
import {Screens} from "../../routes/RouteSlice";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, Screens.LoginPage>;

export const SearchPage: React.FC<Props> = (props) => {
    const theme = useTheme()

    const styles = StyleSheet.create({
        page_container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: theme.main.color_1,
            alignItems: 'center',
        },
        header: {
            height: 50,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            borderBottomRightRadius: 25,
            borderBottomLeftRadius: 25,
            backgroundColor: theme.main.color_5
        }


    });
    const dispatch = useDispatch()
    const navigation = useNavigation()


    return (
        <SafeAreaView style={styles.page_container}>
            <StatusBar
                animated={true}
                backgroundColor={theme.main.color_5}/>
            <View style={styles.header}>
                <TextInput
                    placeholder={"عبارت مورد نظر را وارد کنید"}
                    placeholderTextColor={"#fffa"}
                    style={{
                        // backgroundColor: "red",
                        color: theme.alternative.white,
                        alignItems:"center",
                        textAlign:"center",
                        width: "70%"
                    }}
                >

                </TextInput>
                <Body color={theme.alternative.white} weight={BodyWeight.Bold} size={BodySizes.Medium}>
                    {"جستجو"}
                </Body>
            </View>
        </SafeAreaView>
    )
}


