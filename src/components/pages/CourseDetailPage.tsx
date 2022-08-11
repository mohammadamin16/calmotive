import React from "react";
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from "react-native";
import {useTheme} from "../../UI/theme";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";
import {Screens} from "../../routes/RouteSlice";
import {useDispatch} from "react-redux";
import {Course} from "../course/Course";
import {Episode} from "../course/Episode";
import {BackButton, BackButtonPlacement, BackButtonRotation} from "../BackButton";

type Props = NativeStackScreenProps<RootStackParamList, Screens.LoginPage>;

export const CourseDetailPage: React.FC<Props> = ({navigation}) => {
    const theme = useTheme()

    const styles = StyleSheet.create({
        page_container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: theme.main.color_1,
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
    })

    const dispatch = useDispatch()
    return (
        <SafeAreaView style={styles.page_container}>
            <StatusBar
                animated={true}
                backgroundColor={theme.main.color_3}
                hidden={false}/>
            <BackButton
                backScreen={Screens.HomePage}
                rotation={BackButtonRotation.left}
                placement={BackButtonPlacement.left}
            />
            <Course full_width={true}/>
            <ScrollView style={{
                marginTop: 0,
                width: '100%',
                flexDirection: 'column',
                height: 300,
            }}
                        contentContainerStyle={{
                            alignItems: 'center',
                            width: '90%',
                            marginHorizontal: '5%',
                            justifyContent: 'center',
                        }}
            >
                <Episode/>
                <Episode/>
                <Episode/>
                <Episode/>
                <Episode/>
                <Episode/>
                <Episode/>
                <Episode/>
                <Episode/>
                <Episode/>
                <Episode/>
                <Episode/>
            </ScrollView>
        </SafeAreaView>
    )
}


