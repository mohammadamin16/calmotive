import React from "react";
import {Image, TouchableOpacity, View} from "react-native";
import {useTheme} from "../../UI/theme";
import {RouteActions, Screens} from "../../routes/RouteSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import home_icon from "../../assets/images/icons/home.png";
import active_home_icon from "../../assets/images/icons/active_home.png";
import music_icon from "../../assets/images/icons/music.png";
import active_music_icon from "../../assets/images/icons/active_music.png";
import user_icon from "../../assets/images/icons/user.png";
import active_profile_icon from "../../assets/images/icons/active_profile.png";
import search_icon from "../../assets/images/icons/search.png";
import active_search_icon from "../../assets/images/icons/active_search.png";
import {RootState} from "../../../rootReducer";

interface MenuItemProps {
    icon: any,
    active_icon: any,
    isActive: boolean,
    screen: Screens
}

export const MenuItem: React.FC<MenuItemProps> = ({icon, active_icon, isActive, screen}) => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => {
                dispatch(RouteActions.setActiveScreen(screen))
                navigation.navigate(screen)
            }}
            style={{width: 30, height: 30}}>
            <Image source={isActive ? active_icon : icon} style={{width: 30, height: 30}}/>
        </TouchableOpacity>
    )
}
export const MainMenu: React.FC = (props) => {
    const theme = useTheme()
    const activePage = useSelector((state: RootState) => state.route.screen)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    console.log("active:", activePage)

    return (
        <View
            style={{
                display:
                    activePage === Screens.HomePage ||
                    activePage === Screens.MusicPage ||
                    activePage === Screens.SearchPage ||
                    activePage === Screens.ProfilePage ? "flex" : "none",
                width: "100%",
                flexDirection: "row",
                justifyContent: "center",
                position: 'absolute',
                bottom: 20,
                zIndex: 10,
            }}
        >
            <View

                style={{
                    backgroundColor: "#FFE3D8",
                    width: '90%',
                    borderRadius: 25,
                    paddingVertical: 20,
                    paddingHorizontal: 50,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >

                <MenuItem screen={Screens.HomePage} icon={home_icon} active_icon={active_home_icon}
                          isActive={activePage === Screens.HomePage}/>
                <MenuItem screen={Screens.MusicPage} icon={music_icon} active_icon={active_music_icon}
                          isActive={activePage === Screens.MusicPage}/>
                <MenuItem screen={Screens.ProfilePage} icon={user_icon} active_icon={active_profile_icon}
                          isActive={activePage === Screens.ProfilePage}/>
                <MenuItem screen={Screens.SearchPage} icon={search_icon} active_icon={active_search_icon}
                          isActive={activePage === Screens.SearchPage}/>
            </View>
        </View>
    )
}


