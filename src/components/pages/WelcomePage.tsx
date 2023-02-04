import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {strings} from "../../assets/strings";
import welcome_cover from '../../assets/images/cover.png';
import {Body, BodySizes, BodyWeight} from "../../UI/texts";
import {useTheme} from "../../UI/theme";
import {useDispatch} from "react-redux";
import {RouteActions, Screens} from "../../routes/RouteSlice";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";
import {StatusBar} from "expo-status-bar";

type Props = NativeStackScreenProps<RootStackParamList, Screens.WelcomeScreen>;

export const WelcomePage: React.FC<Props> = ({navigation}) => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const styles = StyleSheet.create({
        page_container: {
            flex: 1,
            backgroundColor: theme.main.color_1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        
        cover_container: {
            flex: 1,
            backgroundColor: theme.main.color_4,
            // backgroundColor: "red",
            position: "absolute",
            top: 0,
            // height:200,
            paddingTop: '10%',
            width: '100%',
            // height:200,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            borderStyle: undefined,
            borderWidth: 0
        },
    });

    return <View style={styles.page_container}>
        <StatusBar
            animated={true}
            backgroundColor={theme.main.color_4}
            hidden={false}/>
        <View style={styles.cover_container}>
            <Image style={{width:"100", height:"100", aspectRatio:1.42}} source={welcome_cover}/>
        </View>
        <Body size={BodySizes.Large} weight={BodyWeight.Regular} color={theme.alternative.black}>
            {strings.welcomeToCalmotive}
        </Body>

        <TouchableOpacity
            onPress={() => {
                dispatch(RouteActions.setActiveScreen(Screens.LoginPage))
                navigation.navigate(Screens.LoginPage)
            }}
            style={{
                position: 'absolute',
                bottom: '20%',
                backgroundColor: theme.main.color_5,
                paddingHorizontal: 40,
                paddingVertical: 15,
                borderRadius: 100
            }}>
            <Body color={theme.alternative.white} weight={BodyWeight.Bold} size={BodySizes.Medium}>
                {strings.lets_start}
            </Body>
        </TouchableOpacity>
        <View
            style={{
                flexDirection: "row",
                position: "absolute",
                bottom: '5%',
                alignItems: 'center'
            }}
        >
        {/*    <TouchableOpacity>*/}
        {/*        <Body size={BodySizes.Small} weight={BodyWeight.Bold} color={theme.main.color_5}>*/}
        {/*            {strings.login}*/}
        {/*        </Body>*/}
        {/*    </TouchableOpacity>*/}
        {/*    <Body style={{marginHorizontal: 10}} size={BodySizes.Small} weight={BodyWeight.Regular}>*/}
        {/*        {strings.u_got_account}*/}
        {/*    </Body>*/}
        </View>
    </View>
}


