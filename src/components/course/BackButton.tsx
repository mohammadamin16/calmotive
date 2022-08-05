import React from "react";
import {Image, TouchableOpacity} from "react-native";
import {useTheme} from "../../UI/theme";
import {useNavigation} from "@react-navigation/native";
import {RouteActions, Screens} from "../../routes/RouteSlice";
import simple_icon from "../../assets/images/icons/simple_arrow.png";
import {useDispatch} from "react-redux";

export enum BackButtonPlacement {
    left,
    right,
}

export enum BackButtonRotation {
    left = "90deg",
    right = "-90deg",
    up = "180deg",
    down = "0deg"
}

interface Props {
    backScreen: Screens;
    placement?: BackButtonPlacement,
    rotation?: BackButtonRotation;
}

export const BackButton: React.FC<Props> = ({
                                                backScreen,
                                                placement = BackButtonPlacement.right,
                                                rotation = BackButtonRotation.down
                                            }) => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => {
                dispatch(RouteActions.setActiveScreen(backScreen))
                navigation.navigate(backScreen)
            }}
            style={{
                position: 'absolute',
                top: 0,
                right: placement === BackButtonPlacement.right ? 20 : "auto",
                left: placement === BackButtonPlacement.left ? 20 : "auto",
                // borderWidth: 1,
                height: 40,
                alignSelf: "flex-start",
                width: 40,
                zIndex:1
            }}
        >

            <Image
                source={simple_icon}
                style={{
                    resizeMode: 'contain',
                    // position:"absolute",
                    // top:10,
                    transform: [{rotate: rotation}],
                    width: 20,
                    maxHeight: 40,
                }}
            />
        </TouchableOpacity>
    )
}
