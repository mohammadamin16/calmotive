import React, {useState} from "react";
import {Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View} from "react-native";
import {Body, BodySizes, BodyWeight} from "../../UI/texts";
import {useTheme} from "../../UI/theme";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";
import {Screens} from "../../routes/RouteSlice";
import {useDispatch} from "react-redux";
import {Audio} from 'expo-av';
import {Sound} from "expo-av/build/Audio/Sound";
import play_icon from "../../assets/images/icons/play.png";
import pause_icon from "../../assets/images/icons/pause.png";
import backward_icon from "../../assets/images/icons/backward.png";
import forward_icon from "../../assets/images/icons/forward.png";

type Props = NativeStackScreenProps<RootStackParamList, Screens.LoginPage>;

export const PlayerPage: React.FC<Props> = ({navigation}) => {
    const theme = useTheme()


    const [sound1, setSound] = useState<Sound>();
    const [position, setPosition] = useState<number>();
    const [status, setStatus] = useState<"Playing" | "Stopping">("Stopping");

    async function playSound() {
        console.log('Loading Sound');
        const {sound} = await Audio.Sound.createAsync(
            require('../../assets/audio/medit01.mp3')
        );

        sound.setOnPlaybackStatusUpdate((status) =>
            console.log(setPosition(status["positionMillis"])))
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function pauseSound() {
        console.log('Pausing Sound');
        await sound1.pauseAsync()
    }

    async function resumeSound() {
        console.log('Pausing Sound');
        await sound1.playAsync();
    }

    React.useEffect(() => {
        return sound1
            ? () => {
                console.log('Unloading Sound');
                sound1.unloadAsync();
            }
            : undefined;
    }, [sound1]);


    const styles = StyleSheet.create({
        page_container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: theme.main.color_1,
            alignItems: 'center',
            justifyContent: 'center',
        },

    });
    const dispatch = useDispatch()

    const handleClick = () => {
        if (status === "Playing") {
            pauseSound()
            setStatus("Stopping")
        } else {
            resumeSound().then().catch(() => playSound())
            setStatus("Playing")
        }
    }
    return (
        <SafeAreaView style={styles.page_container}>
            <StatusBar
                animated={true}
                backgroundColor={theme.main.color_4}
                hidden={false}/>

            <View style={{
                flexDirection: "row",
                width:'75%',
                justifyContent:'space-between'
            }}>

                <TouchableOpacity onPress={() => sound1.setPositionAsync(position - 5000)}>
                    <Image style={{width: 50, height: 50, resizeMode: 'contain'}}
                           source={forward_icon}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleClick}>
                    <Image style={{width: 50, height: 50, resizeMode: 'contain'}}
                           source={status === "Playing" ? pause_icon : play_icon}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => sound1.setPositionAsync(position + 5000)}>
                    <Image style={{width: 50, height: 50, resizeMode: 'contain'}}
                           source={backward_icon}/>
                </TouchableOpacity>

            </View>
            <View style={{position: "absolute", bottom: 100}}>

                <Body weight={BodyWeight.Bold} size={BodySizes.Medium}>
                    {Math.floor(position / 1000) | 0}
                </Body>
            </View>

        </SafeAreaView>
    )
}


