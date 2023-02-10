import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Body, BodySizes, BodyWeight} from '../../UI/texts';
import {useTheme} from '../../UI/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {Screens} from '../../routes/RouteSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import books_icon from '../../assets/images/icons/books.png';
import flame_icon from '../../assets/images/icons/flame.png';
import headphone_icon from '../../assets/images/icons/headphones.png';
import moon_icon from '../../assets/images/icons/moon.png';
import wind_icon from '../../assets/images/icons/wind.png';
import {strings} from '../../assets/strings';
import {Course, CourseProps} from '../course/Course';
import {RootState} from '../../../rootReducer';
import {CourseActions} from '../../course/CourseSlice';
import {Header} from '../Header';
import cover from '../../assets/images/course_covers/cover1.png';

type Props = NativeStackScreenProps<RootStackParamList, Screens.LoginPage>;

interface CategoryIconProps {
  id: number;
  is_active: boolean;
  icon: any;
  title: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({icon, id, title, is_active}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(CourseActions.set_filter(is_active ? 0 : id));
      }}
      style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
    >
      <View
        style={{
          backgroundColor: is_active ? theme.main.color_3 : theme.main.color_5,
          width: 50,
          height: 50,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image source={icon} style={{width: 40, height: 40}} />
      </View>
      <Body weight={BodyWeight.Medium} size={BodySizes.Medium}>
        {title}
      </Body>
    </TouchableOpacity>
  );
};

interface Category {
  id: number;
  title: string;
  icon: any;
}

const courses: CourseProps[] = [
  {
    icon_url: cover,
    description:
      'دوره در هفت روز طراحی شده\n' +
      'به طوری که روزانه با هم مدیتیشن میکنیم و نکات و تکنیک هارو یاد میگیرید',
    title: 'دوره شروع مدیتیشن',
    episode_number: 7,
  },
];
export const HomePage: React.FC<Props> = props => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    page_container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: theme.main.color_1,
      alignItems: 'center',
    },
    header: {
      position: 'absolute',
      top: 0,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.main.color_4,
      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 25,
      // height: 56,
      width: '100%',
    },
  });
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const selectedFilterId = useSelector((state: RootState) => state.course.active_filter);
  const categories: Category[] = [
    {
      id: 1,
      title: strings.homepage.podcasts,
      icon: headphone_icon,
    },
    {
      id: 2,
      title: strings.homepage.course,
      icon: books_icon,
    },
    {
      id: 3,
      title: strings.homepage.breath,
      icon: wind_icon,
    },
    {
      id: 4,
      title: strings.homepage.sleep,
      icon: moon_icon,
    },
    {
      id: 5,
      title: strings.homepage.new_items,
      icon: flame_icon,
    },
  ];

  return (
    <View style={styles.page_container}>
      <StatusBar animated={true} backgroundColor={theme.main.color_1} hidden={false} />
      <Header />
      {/*<View*/}
      {/*  style={{*/}
      {/*    width: '90%',*/}
      {/*    flexDirection: 'row',*/}
      {/*    marginTop: 30,*/}
      {/*    justifyContent: 'space-between',*/}
      {/*    alignItems: 'center',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  {categories.map(c => (*/}
      {/*    <CategoryIcon*/}
      {/*      key={c.id}*/}
      {/*      id={c.id}*/}
      {/*      is_active={selectedFilterId === c.id}*/}
      {/*      icon={c.icon}*/}
      {/*      title={c.title}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</View>*/}
      <ScrollView
        style={{
          marginTop: 100,
          width: '100%',
          flexDirection: 'column',

          height: 300,
        }}
      >
        <View style={{alignItems: 'center', paddingBottom: 100}}>
          {courses.map(c => (
            <Course key={c.title} {...c} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
