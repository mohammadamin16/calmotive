import React from "react";
import {Image, TouchableOpacity, View} from "react-native";
import {Body, BodySizes, BodyWeight} from "../../UI/texts";
import {useTheme} from "../../UI/theme";
import {useNavigation} from "@react-navigation/native";
import {Screens} from "../../routes/RouteSlice";
import simple_icon from "../../assets/images/icons/simple_arrow.png";

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
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(backScreen)}
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
