import React from "react";
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from "react-native";
import {useTheme} from "../../UI/theme";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";
import {Screens} from "../../routes/RouteSlice";
import {useDispatch} from "react-redux";
import {Course} from "../course/Course";
import {Episode} from "../course/Episode";
import {BackButton, BackButtonPlacement, BackButtonRotation} from "../BackButton";

type Props = NativeStackScreenProps<RootStackParamList, Screens.LoginPage>;

export const CourseDetailPage: React.FC<Props> = ({navigation}) => {
    const theme = useTheme()

    const styles = StyleSheet.create({
        page_container: {
            flex: 1,
            marginTop:50,
            flexDirection: "column",
            backgroundColor: theme.main.color_1,
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
    })

    const dispatch = useDispatch()
    return (
      <View style={styles.page_container}>
        <StatusBar animated={true} backgroundColor={theme.main.color_3} hidden={false} />
        <BackButton
          backScreen={Screens.HomePage}
          rotation={BackButtonRotation.left}
          placement={BackButtonPlacement.left}
        />
        <Course
          episode_number={5}
          description={
            'دوره در هفت روز طراحی شده' +
            'به طوری که روزانه با هم مدیتیشن میکنیم و نکات و تکنیک هارو یاد میگیرید'
          }
          title={'دوره آموزش مدیتیشن'}
          full_width={true}
        />
        <ScrollView
          style={{
            marginTop: 0,
            width: '100%',
            flexDirection: 'column',
            height: 300,
          }}
          contentContainerStyle={{
            alignItems: 'center',
            width: '90%',
            marginHorizontal: '5%',
            justifyContent: 'center',
          }}
        >
          <Episode episode_id={1} duration={9} title={'مدیتیشن چیه؟'} />
          <Episode episode_id={2} duration={9} title={'نمیتونم تمرکز کنم!'} />
          <Episode episode_id={3} duration={8} title={'واقعا تاثیر داره؟'} />
          <Episode episode_id={4} duration={9} title={'رفع استرس و اضطراب'} />
          <Episode episode_id={5} duration={9} title={'پذیرش'} />
          <Episode episode_id={6} duration={8} title={'واکنش های احساسی'} />
          <Episode episode_id={7} duration={10} title={'جمع بندی نکات و تبدیل عادت'} />
        </ScrollView>
      </View>
    );
}


