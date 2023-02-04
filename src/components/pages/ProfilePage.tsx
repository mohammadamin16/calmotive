import React from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Body, BodySizes, BodyWeight} from '../../UI/texts';
import {useTheme} from '../../UI/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {RouteActions, Screens} from '../../routes/RouteSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '../Icon';
import settings_icon from '../../assets/images/icons/settings.png';
import like_icon from '../../assets/images/icons/like.png';
import sample_avatar from '../../assets/images/sample_avatar.png';
import headphone_icon from '../../assets/images/icons/headphones.png';
import books_icon from '../../assets/images/icons/books.png';
import {strings} from '../../assets/strings';
import {BackButton, BackButtonPlacement, BackButtonRotation} from '../BackButton';
import {usePhone} from '../../hooks/auth';

type Props = NativeStackScreenProps<RootStackParamList, Screens.LoginPage>;

export const CustomButton: React.FC<{
  onPress?: () => void;
  text: string;
  width?: number | string;
  color?: string;
  textColor?: string;
  style?: StyleProp<ViewStyle>;
}> = props => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: props.color ?? theme.main.color_3,
          borderRadius: 1000,
          bottom: 100,
          position: 'absolute',
          paddingHorizontal: 10,
          width: props.width ?? 'auto',
          alignItems: 'center',
        },
        props.style,
      ]}
      onPress={props.onPress}
    >
      <Body
        color={props.textColor ?? theme.alternative.black}
        weight={BodyWeight.Regular}
        size={BodySizes.Medium}
      >
        {props.text}
      </Body>
    </TouchableOpacity>
  );
};

export const Avatar: React.FC<{image: ImageSourcePropType}> = props => {
  return (
    <Image
      style={{
        width: 100,
        maxHeight: 100,
        resizeMode: 'contain',
        borderRadius: 10000,
      }}
      source={props.image}
    />
  );
};

export const ActivityBadge: React.FC<{image: ImageSourcePropType; text: string}> = props => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.main.color_5,
        width: 150,
        borderRadius: 25,
        height: 50,
        // marginHorizontal:10,
        margin: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Image
        style={{
          width: 30,
          maxHeight: 30,
          resizeMode: 'contain',
        }}
        source={props.image}
      />
      <Body color={theme.alternative.white} weight={BodyWeight.Light} size={BodySizes.Medium}>
        {props.text}
      </Body>
    </View>
  );
};

export const ProfilePage: React.FC<Props> = props => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    page_container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: theme.main.color_1,
      alignItems: 'center',
      paddingTop: 50,
    },
    header: {
      position: 'absolute',
      top: 0,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      // height: 40,
      paddingBottom: 10,
      backgroundColor: theme.main.color_4,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
    },
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {logout} = usePhone();
  const naviagtion = useNavigation();
  const handleOnLogout = () => {
    logout();
    dispatch(RouteActions.setActiveScreen(Screens.LoginPage));
    navigation.navigate(Screens.LoginPage);
  };

  return (
    <SafeAreaView style={styles.page_container}>
      <StatusBar animated={true} backgroundColor={theme.main.color_4} />
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
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignItems: 'center',
          marginVertical: 20,
          justifyContent: 'space-between',
        }}
      >
        <Icon style={{bottom: 20}} size={30} image={settings_icon} />
        <Avatar image={sample_avatar} />
        <Icon style={{bottom: 20}} size={30} image={like_icon} />
      </View>
      {/*<View style={{*/}
      {/*    flexDirection: "row",*/}
      {/*    alignItems: "center",*/}
      {/*    justifyContent: "space-between",*/}
      {/*    width: "80%"*/}
      {/*}}>*/}
      {/*    <CustomButton*/}
      {/*        textColor={theme.alternative.white}*/}
      {/*        text={"تمدید اشتراک"}*/}
      {/*        onPress={() => navigation.navigate(Screens.ChoosePlanPage)}*/}
      {/*    />*/}

      {/*    <CustomButton*/}
      {/*        textColor={theme.alternative.white}*/}
      {/*        text={"25 از اشتراک باقیمانده"}*/}
      {/*        color={theme.main.color_4}*/}
      {/*        // onPress={() => alert()}*/}
      {/*    />*/}
      {/*</View>*/}
      {/*<View style={{*/}
      {/*    marginTop: 10,*/}
      {/*    flexDirection: "row",*/}
      {/*    // alignItems: "center",*/}
      {/*    justifyContent: "center",*/}
      {/*    width: "80%"*/}
      {/*}}>*/}
      {/*    <CustomButton*/}
      {/*        textColor={theme.alternative.black}*/}
      {/*        text={"دعوت از دوستان"}*/}
      {/*        color={theme.main.color_2}*/}
      {/*        style={{marginTop: 20, marginBottom: 100}}*/}
      {/*        // onPress={() => alert()}*/}
      {/*    />*/}
      {/*</View>*/}

      <Body weight={BodyWeight.Regular} style={{marginBottom: 20}} size={BodySizes.Medium}>
        {'فعالیت تو در کالموتیو:'}
      </Body>

      {/*<View style={{*/}
      {/*    width: "100%",*/}
      {/*    justifyContent: "center",*/}
      {/*    flexWrap: "wrap",*/}
      {/*    flexDirection: "row",*/}
      {/*}}>*/}
      {/*    <ActivityBadge image={headphone_icon} text={"25 ساعت "}/>*/}
      {/*    <ActivityBadge image={books_icon} text={"35 قسمت"}/>*/}
      {/*    <ActivityBadge image={settings_icon} text={"225 روز"}/>*/}
      {/*    <ActivityBadge image={settings_icon} text={"12 دوره"}/>*/}
      {/*</View>*/}

      <CustomButton
        onPress={handleOnLogout}
        style={{marginTop: 30}}
        text={'خروج از حساب کاربری'}
        color={'#EB5757'}
      />
    </SafeAreaView>
  );
};
