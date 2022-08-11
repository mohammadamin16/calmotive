import React from "react";
import {Image, ImageSourcePropType, StyleProp, TouchableOpacity, ViewStyle} from "react-native";
import {useTheme} from "../UI/theme";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";


interface Props {
    image: ImageSourcePropType
    onPress?: () => void,
    style?: StyleProp<ViewStyle>,
    size: number
}

export const Icon: React.FC<Props> = ({image, onPress, size, style}) => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[{
                width: size,
                height: size,
            }, style]}
        >

            <Image
                source={image}
                style={{
                    resizeMode: 'contain',
                    width: "100%",
                    maxHeight: size
                }}
            />
        </TouchableOpacity>
    )
}
