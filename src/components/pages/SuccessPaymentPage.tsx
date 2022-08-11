import React, {useState} from "react";
import {SafeAreaView, StatusBar, StyleSheet, TouchableOpacity} from "react-native";
import {useTheme} from "../../UI/theme";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";
import {RouteActions, Screens} from "../../routes/RouteSlice";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {Body, BodySizes, BodyWeight} from "../../UI/texts";
import {BackButton, BackButtonPlacement, BackButtonRotation} from "../BackButton";

type Props = NativeStackScreenProps<RootStackParamList, Screens.LoginPage>;


export const SuccessPaymentPage: React.FC<Props> = (props) => {
    const theme = useTheme()
    const [status, setStatus] = useState<"Playing" | "Stopping">("Stopping");

    const styles = StyleSheet.create({
        page_container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: theme.main.color_1,
            paddingTop: 100,
            justifyContent:"center",
            alignItems: 'center',
            paddingBottom:200,
        },
    });
    const navigation = useNavigation()
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={styles.page_container}>
            <StatusBar
                animated={true}
                backgroundColor={theme.main.color_1}/>

            <BackButton backScreen={Screens.ProfilePage}
                        rotation={BackButtonRotation.left}
                        placement={BackButtonPlacement.left}
            />

            <Body
                style={{marginBottom: 50}}
                weight={BodyWeight.Bold} size={BodySizes.Large}>
                {"اشتراک سه ماهه با موفقیت فعال شد"}
            </Body>
            <TouchableOpacity
                onPress={() => {
                    dispatch(RouteActions.setActiveScreen(Screens.HomePage))
                    navigation.navigate(Screens.HomePage)
                }}
                style={{
                    padding: 10,
                    paddingHorizontal: 30,
                    backgroundColor: theme.main.color_4,
                    borderRadius: 25,
                }}
            >

                <Body
                    color={theme.alternative.white}
                    weight={BodyWeight.Regular} size={BodySizes.Medium}>
                    {"بازگشت به صفحه ی اصلی"}
                </Body>
            </TouchableOpacity>

        </SafeAreaView>
    )
}


