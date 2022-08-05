import React from "react";
import {Image, TouchableOpacity, View} from "react-native";
import {Body, BodySizes, BodyWeight} from "../../UI/texts";
import {useTheme} from "../../UI/theme";
import cover from '../../assets/images/course_covers/cover1.png';
import play_icon from '../../assets/images/icons/play.png';
import {RouteActions, Screens} from "../../routes/RouteSlice";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";


interface MenuItemProps {
    full_width?: boolean;
}

export const Course: React.FC<MenuItemProps> = (props) => {
    const theme = useTheme()
    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <TouchableOpacity
            style={{
                backgroundColor: theme.main.color_3,
                borderRadius: 25,
                borderTopRightRadius: props.full_width ? 0 : 25,
                borderTopLeftRadius: props.full_width ? 0 : 25,
                width: props.full_width ? "100%" : '80%',
                height: 200,
                flexDirection: 'row',
                overflow: 'hidden',
                marginBottom: 20,
            }}
            onPress={() => {
                dispatch(RouteActions.setActiveScreen(Screens.CourseDetailPage))
                navigation.navigate(Screens.CourseDetailPage)
            }}
        >
            <View style={{
                flexDirection: 'column',
                width: '40%',
                height: '100%',
                alignItems: 'center'
            }}>
                <Image source={cover} style={{width: "100%", height: '100%'}}/>
            </View>
            <View style={{
                flexDirection: 'column',
                width: '60%',
                height: '100%',
                alignItems: 'center',
                padding: 10,
            }}>
                <Body weight={BodyWeight.Bold} size={BodySizes.Large} color={theme.alternative.white}>
                    {"شروع مدیتیشن"}
                </Body>

                <Body weight={BodyWeight.Regular}
                      size={BodySizes.Medium} color={theme.alternative.white}>
                    {"این دوره به شما کمک میکند تا با اصول اولیه مدیتیشن آشنا شوید."}
                </Body>
                <View style={{
                    flexDirection: "row",
                    marginVertical: 10,
                    width: '80%',
                    justifyContent: 'space-between'
                }}>
                    <Body weight={BodyWeight.SemiBold} size={BodySizes.Medium} color={theme.main.color_4}>
                        {"12 قسمت"}
                    </Body>
                    <Image source={play_icon} style={{
                        width: 30, height: 30,
                        resizeMode: 'contain'
                    }}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}
