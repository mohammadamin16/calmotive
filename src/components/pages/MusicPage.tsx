import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackComponent,
  View,
} from 'react-native';
import {Body, BodySizes, BodyWeight} from '../../UI/texts';
import {useTheme} from '../../UI/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {Screens} from '../../routes/RouteSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../../assets/strings';
import fire_image from '../../assets/images/music_items/fire.png';
import wind_image from '../../assets/images/music_items/wind.png';
import rain_image from '../../assets/images/music_items/rain.png';
import bell_image from '../../assets/images/music_items/bell.png';
import birds_image from '../../assets/images/music_items/birds.png';
import car_image from '../../assets/images/music_items/car.png';
import cow_image from '../../assets/images/music_items/cow.png';
import jungle_image from '../../assets/images/music_items/jungle.png';
import ocean_image from '../../assets/images/music_items/ocean.png';
import river_image from '../../assets/images/music_items/river.png';
import thunder_image from '../../assets/images/music_items/thunder.png';
import water_walk_image from '../../assets/images/music_items/water_walk.png';
import {BackButton, BackButtonPlacement, BackButtonRotation} from '../BackButton';
import {MixerActions, Track} from '../../mixer/MixerSlice';
import {RootState} from '../../../rootReducer';

import play_icon from '../../assets/images/icons/play.png';
import pause_icon from '../../assets/images/icons/pause.png';
import cross_icon from '../../assets/images/icons/cross.png';
import {Audio} from 'expo-av';
import ReactGA from 'react-ga4';

type Props = NativeStackScreenProps<RootStackParamList, Screens.LoginPage>;

export const MusicItem: React.FC<Track & {onPress: () => void}> = props => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginVertical: 10,
      width: 100,
      marginHorizontal: 10,
    },
    music_item: {
      width: 70,
      height: 70,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: theme.alternative.white,
      borderWidth: props.is_active ? 2 : 0,
      borderRadius: 25,
      backgroundColor: props.is_active ? theme.main.color_2 : theme.main.color_1,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.music_item} onPress={props.onPress}>
        <Image
          source={props.logo_url}
          style={{
            width: 40,
            height: 40,
            maxWidth: 40,
            resizeMode: 'contain',
          }}
        />
      </TouchableHighlight>
      <Body
        weight={BodyWeight.Light}
        size={BodySizes.Medium}
        // style={{height: 10}}
        color={theme.alternative.white}
      >
        {props.title}
      </Body>
    </View>
  );
};

export const MusicPage: React.FC<Props> = props => {
  const theme = useTheme();
  const [status, setStatus] = useState<'Playing' | 'Stopping'>('Stopping');

  const styles = StyleSheet.create({
    page_container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: theme.main.color_5,
      paddingTop: 100,
      alignItems: 'center',
      // justifyContent: "center",
    },
    header: {
      position: 'absolute',
      top: 0,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      // height: 40,
      paddingBottom: 10,
      backgroundColor: theme.main.color_1,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
    },
    music_item_container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      // height:"80%",
      // alignItems: "center",
      marginTop: 10,
      justifyContent: 'center',
      // borderWidth: 1,
      paddingBottom: 100,
    },
  });
  useEffect(() => {
    ReactGA.event({
      action: 'music_page visit',
      label: 'MusicPage',
      category: 'music',
    });
  }, []);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const tracks = useSelector((state: RootState) => state.mixer.tracks);
  const active_tracks = useSelector((state: RootState) => state.mixer.active_tracks);
  const mock_tracks: Track[] = [
    {
      id: 1,
      track_url: '../../assets/audio/music/wind.wav',
      track: require('../../assets/audio/music/wind.wav'),
      logo_url: wind_image,
      title: strings.musics.wind,
    },
    {
      id: 2,
      track_url: '../../assets/audio/music/fire.wav',
      track: require('../../assets/audio/music/fire.wav'),
      logo_url: fire_image,
      title: strings.musics.fire,
    },
    {
      id: 3,
      track_url: '../../assets/audio/music/rain.wav',
      track: require('../../assets/audio/music/rain.wav'),
      logo_url: rain_image,
      title: strings.musics.rain,
    },
    {
      id: 4,
      track_url: '../../assets/audio/music/cows.mp3',
      track: require('../../assets/audio/music/cows.mp3'),
      logo_url: cow_image,
      title: strings.musics.cows,
    },
    {
      id: 5,
      track_url: '../../assets/audio/music/bell.mp3',
      track: require('../../assets/audio/music/bell.mp3'),
      logo_url: bell_image,
      title: strings.musics.bell,
    },
    {
      id: 6,
      track_url: '../../assets/audio/music/birds.wav',
      track: require('../../assets/audio/music/birds.wav'),
      logo_url: rain_image,
      title: strings.musics.birds,
    },
    {
      id: 7,
      track_url: '../../assets/audio/music/car_noise.mp3',
      track: require('../../assets/audio/music/car_noise.mp3'),
      logo_url: car_image,
      title: strings.musics.car,
    },
    {
      id: 8,
      track_url: '../../assets/audio/music/footstep_in_water.mp3',
      track: require('../../assets/audio/music/footstep_in_water.mp3'),
      logo_url: water_walk_image,
      title: strings.musics.water_walk,
    },
    {
      id: 9,
      track_url: '../../assets/audio/music/jungle.wav',
      track: require('../../assets/audio/music/jungle.wav'),
      logo_url: jungle_image,
      title: strings.musics.jungle,
    },
    {
      id: 10,
      track_url: '../../assets/audio/music/ocean.wav',
      track: require('../../assets/audio/music/ocean.wav'),
      logo_url: ocean_image,
      title: strings.musics.ocean,
    },
    {
      id: 11,
      track_url: '../../assets/audio/music/river.wav',
      track: require('../../assets/audio/music/river.wav'),
      logo_url: river_image,
      title: strings.musics.river,
    },
    {
      id: 12,
      track_url: '../../assets/audio/music/thunder.wav',
      track: require('../../assets/audio/music/thunder.wav'),
      logo_url: thunder_image,
      title: strings.musics.thunder,
    },
  ];

  const [loadedTracks, setLoadedTracks] = useState<{id: number; track: Audio.Sound}[]>([]);

  const load_track = async (id: number, url: any) => {
    const {sound} = await Audio.Sound.createAsync(url);
    setLoadedTracks(loadedTracks => [...loadedTracks, {id: id, track: sound}]);
    return sound;
  };

  const play_track = async (id: number) => {
    const track = loadedTracks.find(t => t.id === id)?.track;
    if (track) {
      await track.playAsync();
    } else {
      const sound = await load_track(id, mock_tracks.find(t => t.id === id).track);
      await sound.playAsync();
      await sound.setIsLoopingAsync(true);
    }
    dispatch(MixerActions.activate(id));
  };

  const stop_track = async (id: number) => {
    const track = loadedTracks.find(t => t.id === id).track;
    if (track) {
      await track.stopAsync();
      dispatch(MixerActions.deactivate(id));
    }
  };

  const pause_track = async (id: number) => {
    const track = loadedTracks.find(t => t.id === id).track;
    if (track) {
      await track.pauseAsync();
      dispatch(MixerActions.deactivate(id));
    }
  };

  useEffect(() => {
    dispatch(MixerActions.set_tracks(mock_tracks));
  }, []);

  useEffect(() => {
    active_tracks.length > 0 ? setStatus('Playing') : setStatus('Stopping');
  }, [active_tracks]);

  return (
    <View style={styles.page_container}>
      <StatusBar animated={true} backgroundColor={theme.main.color_1} />
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

      <Body
        style={{bottom: 20}}
        weight={BodyWeight.Bold}
        size={BodySizes.Medium}
        color={theme.alternative.white}
      >
        {'با لمس هر آیکون آن را پخش کنید.'}
      </Body>
      <ScrollView
        style={{
          marginTop: 20,
          // justifyContent:"center",
          // alignItems:"center",
          width: '100%',
          flexDirection: 'column',
          height: 300,
        }}
        contentContainerStyle={{
          alignItems: 'center',
        }}
      >
        <View style={styles.music_item_container}>
          {tracks?.map(track => {
            const isActive = Boolean(active_tracks.filter(t => t === track.id).length);
            return (
              <MusicItem
                key={track.id}
                title={track.title}
                id={track.id}
                track_url={track.track_url}
                logo_url={track.logo_url}
                is_active={isActive}
                onPress={() => {
                  !isActive
                    ? play_track(track.id).catch(error => alert(error))
                    : pause_track(track.id).catch(error => alert(error));
                }}
              />
            );
          })}
        </View>
      </ScrollView>
      <View
        style={{
          display: active_tracks.length === 0 ? 'none' : 'flex',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 100,
          zIndex: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            // if (status === 'Playing') {
            active_tracks.forEach(pause_track);
            // } else {
            //   active_tracks.forEach(play_track);
            // }
          }}
          style={{
            backgroundColor: theme.main.color_2,
            width: '90%',
            borderRadius: 25,
            paddingVertical: 10,
            paddingHorizontal: 50,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <>
            <Image source={cross_icon} style={{width: 15, resizeMode: 'contain', height: 15}} />
            <Body
              weight={BodyWeight.Bold}
              size={BodySizes.Medium}
              color={theme.alternative.white}
              style={{direction: 'rtl'}}
            >
              {'توقف همه‌ی ترک ها'}
            </Body>
          </>
        </TouchableOpacity>
      </View>
    </View>
  );
};
