import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useTheme} from '../UI/theme';
import {RouteActions, Screens} from '../routes/RouteSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import home_icon from '../assets/images/icons/home.png';
import active_home_icon from '../assets/images/icons/active_home.png';
import music_icon from '../assets/images/icons/music.png';
import active_music_icon from '../assets/images/icons/active_music.png';
import user_icon from '../assets/images/icons/user.png';
import active_profile_icon from '../assets/images/icons/active_profile.png';
import search_icon from '../assets/images/icons/search.png';
import active_search_icon from '../assets/images/icons/active_search.png';
import {RootState} from '../../rootReducer';
import {Body, BodySizes, BodyWeight} from '../UI/texts';

interface MenuItemProps {
  icon: any;
  active_icon: any;
  isActive: boolean;
  screen: Screens;
  isDisable?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  isDisable,
  active_icon,
  isActive,
  screen,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          if (!isDisable) {
            dispatch(RouteActions.setActiveScreen(screen));
            navigation.navigate(screen);
          }
        }}
        style={{
          position: 'relative',
          // backgroundColor:"red",
          padding: 10,
          width: 50,
          height: 50,
        }}
      >
        <View
          style={{
            position: 'absolute',
            left: -5,
            top: -2,
            borderRadius: 50,
            // width: 20,
            // height: 20,
            backgroundColor: theme.main.color_5,
          }}
        >
          {isDisable && (
            <Body color={theme.alternative.white} size={BodySizes.Small} weight={BodyWeight.Medium}>
              {'به زودی'}
            </Body>
          )}
        </View>
        <Image
          source={isActive ? active_icon : icon}
          style={{width: 30, height: 30, opacity: isDisable ? 0.5 : 1}}
        />
      </TouchableOpacity>
    </>
  );
};
export const MainMenu: React.FC = props => {
  const theme = useTheme();
  const activePage = useSelector((state: RootState) => state.route.screen);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View
      style={{
        display:
          activePage === Screens.HomePage ||
          activePage === Screens.MusicPage ||
          activePage === Screens.SearchPage ||
          activePage === Screens.ProfilePage
            ? 'flex'
            : 'none',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        zIndex: 10,
      }}
    >
      <View
        style={{
          backgroundColor: '#FFE3D8',
          width: '90%',
          borderRadius: 25,
          paddingVertical: 5,
          paddingHorizontal: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <MenuItem
          screen={Screens.HomePage}
          icon={home_icon}
          active_icon={active_home_icon}
          isActive={activePage === Screens.HomePage}
        />
        <MenuItem
          screen={Screens.MusicPage}
          icon={music_icon}
          active_icon={active_music_icon}
          isActive={activePage === Screens.MusicPage}
        />
        <MenuItem
          screen={Screens.SearchPage}
          icon={search_icon}
          isDisable={true}
          active_icon={active_search_icon}
          isActive={activePage === Screens.SearchPage}
        />
        <MenuItem
          screen={Screens.ProfilePage}
          icon={user_icon}
          // isDisable={true}
          active_icon={active_profile_icon}
          isActive={activePage === Screens.ProfilePage}
        />
      </View>
    </View>
  );
};
