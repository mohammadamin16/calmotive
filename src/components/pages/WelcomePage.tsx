import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {strings} from "../../assets/strings";
import welcome_cover from '../../assets/images/cover.png';
import {Body, BodySizes, BodyWeight} from "../../UI/texts";
import {useTheme} from "../../UI/theme";


export const WelcomePage: React.FC = (props) => {
    const theme = useTheme()

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
            position: "absolute",
            top: 0,
            paddingTop: '10%',
            width: '100%',
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            borderStyle: undefined,
            borderWidth: 0
        },
    });

    return <View style={styles.page_container}>
        <View style={styles.cover_container}>
            <Image source={welcome_cover}/>
        </View>
        <Body size={BodySizes.Large} weight={BodyWeight.Regular} color={theme.alternative.black}>
            {strings.welcomeToCalmotive}
        </Body>

        <TouchableOpacity
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
            <TouchableOpacity>
                <Body size={BodySizes.Small} weight={BodyWeight.Bold} color={theme.main.color_5}>
                    {strings.login}
                </Body>
            </TouchableOpacity>
            <Body style={{marginHorizontal:10}} size={BodySizes.Small} weight={BodyWeight.Regular}>
                {strings.u_got_account}
            </Body>
        </View>
    </View>
}


