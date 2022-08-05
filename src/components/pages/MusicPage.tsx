import React, {useEffect} from "react";
import {Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View} from "react-native";
import {Body, BodySizes, BodyWeight} from "../../UI/texts";
import {useTheme} from "../../UI/theme";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";
import {Screens} from "../../routes/RouteSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {strings} from "../../assets/strings";
import fire_image from "../../assets/images/music_items/fire.png"
import {BackButton, BackButtonPlacement, BackButtonRotation} from "../course/BackButton";
import {MixerActions, Track} from "../../mixer/MixerSlice";
import {RootState} from "../../../rootReducer";

type Props = NativeStackScreenProps<RootStackParamList, Screens.LoginPage>;


export const MusicItem: React.FC<Track> = (props) => {
    const theme = useTheme()
    const dispatch = useDispatch()


    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            marginBottom: 30,
            marginHorizontal: 20,
            borderWidth: props.is_active ? 2 : 0,
            borderColor: theme.alternative.white,
        },
        music_item: {
            width: 70,
            height: 70,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            backgroundColor: props.is_active ? theme.main.color_2 : theme.main.color_1
        },
    })
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.music_item}
                onPress={() => dispatch(MixerActions.activate(props.id))}
            >
                <Image source={fire_image} style={{
                    maxWidth: 40,
                    resizeMode: 'contain',
                }}/>
            </TouchableOpacity>
            <Body
                weight={BodyWeight.Light}
                size={BodySizes.Medium}
                color={theme.alternative.white}
            >
                {"آتش"}
            </Body>
        </View>
    )
}

export const MusicPage: React.FC<Props> = (props) => {
    const theme = useTheme()

    const styles = StyleSheet.create({
        page_container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: theme.main.color_5,
            alignItems: 'center',
            justifyContent: "center",
        },
        header: {
            position: "absolute",
            top: 0,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            // height: 40,
            paddingBottom: 10,
            backgroundColor: theme.main.color_1,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
        },
        music_item_container: {
            flexDirection: "row",
            flexWrap: "wrap",
            width: "90%",
            // height:"80%",
            alignItems: "center",
            marginTop: 10,
            justifyContent: "center",
            // borderWidth: 1,
        },
    });
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const tracks = useSelector((state: RootState) => state.mixer.tracks)
    const active_tracks = useSelector((state: RootState) => state.mixer.active_tracks)
    const loaded_tracks: Track[] = [
        {
            id: 1,
            track_url: "",
            logo_url: fire_image,
            title: "آتش",
        },
        {
            id: 1,
            track_url: "",
            logo_url: fire_image,
            title: "آتش",
        },
        {
            id: 1,
            track_url: "",
            logo_url: fire_image,
            title: "آتش",
        },
        {
            id: 1,
            track_url: "",
            logo_url: fire_image,
            title: "آتش",
        },
    ]
    useEffect(() => {
        dispatch(MixerActions.set_tracks(loaded_tracks))

    }, [])
    console.log("active", active_tracks)
    console.log("all", tracks)
    return (
        <SafeAreaView style={styles.page_container}>
            <StatusBar
                animated={true}
                backgroundColor={theme.main.color_1}/>
            <View style={styles.header}>
                <Body weight={BodyWeight.Bold} size={BodySizes.Medium}>
                    {strings.calmotive}

                </Body>
                <BackButton
                    backScreen={Screens.HomePage}
                    placement={BackButtonPlacement.left}
                    rotation={BackButtonRotation.left}
                />
            </View>
            <View style={styles.music_item_container}>
                {tracks?.map((track) => (
                    <MusicItem
                        title={track.title}
                        id={track.id}
                        track_url={track.track_url}
                        logo_url={track.logo_url}
                        is_active={Boolean(active_tracks.filter(t => t === track.id).length)}
                    />
                ))}
            </View>
        </SafeAreaView>
    )
}


