import React from 'react';
import {Image, ImageSourcePropType, TouchableOpacity, View} from 'react-native';
import {Body, BodySizes, BodyWeight} from '../../UI/texts';
import {useTheme} from '../../UI/theme';
import cover from '../../assets/images/course_covers/cover1.png';
import play_icon from '../../assets/images/icons/play.png';
import {RouteActions, Screens} from '../../routes/RouteSlice';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

export interface CourseProps {
  full_width?: boolean;
  title: string;
  description: string;
  icon_url: ImageSourcePropType;
  episode_number: number;
}

export const Course: React.FC<CourseProps> = props => {
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.main.color_3,
        borderRadius: 25,
        borderTopRightRadius: props.full_width ? 0 : 25,
        borderTopLeftRadius: props.full_width ? 0 : 25,
        width: props.full_width ? '100%' : '80%',
        height: 200,
        flexDirection: 'row',
        overflow: 'hidden',
        marginBottom: 20,
      }}
      onPress={() => {
        dispatch(RouteActions.setActiveScreen(Screens.CourseDetailPage));
        navigation.navigate(Screens.CourseDetailPage);
      }}
    >
      <View
        style={{
          flexDirection: 'column',
          width: '40%',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <Image
          source={props.icon_url || cover}
          style={{width: '100%', borderTopRightRadius: props.full_width ? 25 : 0, height: '100%'}}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          width: '60%',
          height: '100%',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <Body weight={BodyWeight.Bold} size={BodySizes.Large} color={theme.alternative.white}>
          {props.title}
        </Body>

        <Body
          style={{maxWidth: '100%', overflow: 'hidden', maxHeight: 100}}
          weight={BodyWeight.Regular}
          size={BodySizes.Medium}
          color={theme.alternative.white}
        >
          {props.description}
        </Body>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            width: '80%',
            justifyContent: 'space-between',
          }}
        >
          <Body weight={BodyWeight.SemiBold} size={BodySizes.Medium} color={theme.main.color_4}>
            {` قسمت ${props.episode_number || 0}`}
          </Body>
          <Image
            source={play_icon}
            style={{
              width: 30,
              height: 30,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
