import React, {useMemo, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Body, BodySizes, BodyWeight} from '../../UI/texts';
import {useTheme} from '../../UI/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {RouteActions, Screens} from '../../routes/RouteSlice';
import {strings} from '../../assets/strings';
import ArrowIcon from '../../assets/images/arrow.png';
import {useDispatch} from 'react-redux';
import {usePhone} from '../../hooks/auth';
import emailjs from '@emailjs/browser';
import {detect} from 'detect-browser';

type Props = NativeStackScreenProps<RootStackParamList, Screens.LoginPage>;

export const LoginPage: React.FC<Props> = ({navigation}) => {
  const theme = useTheme();
  const [phone, setPhone] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [codeStep, setCodeStep] = useState<boolean>();
  const isButtonActive = useMemo(() => {
    if (codeStep) {
      return code.length === 4;
    } else {
      return phone.length === 11;
    }
  }, [phone, code, codeStep]);
  const styles = StyleSheet.create({
    page_container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: theme.main.color_1,
      alignItems: 'center',
      justifyContent: 'center',
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
    phone_input: {
      backgroundColor: theme.main.color_4,
      padding: 20,
      marginVertical: 10,
      textAlign: 'center',
      letterSpacing: 4,
      borderRadius: 25,
      fontWeight: 'bold',
      color: theme.alternative.white,
      fontSize: 25,
    },
    arrow_icon: {
      position: 'absolute',
      right: 20,
      bottom: 20,
      width: 30,
      height: 30,
      opacity: isButtonActive ? 1 : 0.5,
    },
  });
  const dispatch = useDispatch();
  const {savePhone} = usePhone();
  const handleCodeSubmit = () => {
    savePhone(phone);
    dispatch(RouteActions.setActiveScreen(Screens.HomePage));
    navigation.navigate(Screens.HomePage);
  };
  const handleInputChange = (text: string) => {
    codeStep ? setCode(text) : setPhone(text);
  };
  const handleSubmit = () => {
    const browser = detect();
    emailjs
      .send(
        'service_w580jyj',
        'template_s2x2hu1',
        {phone: phone, browser: `${browser.name} - ${browser.type} - ${browser.os}`},
        'Q4fKfqxDks9Slhok8'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    handleCodeSubmit();
  };

  return (
    <SafeAreaView style={styles.page_container}>
      <StatusBar animated={true} backgroundColor={theme.main.color_4} hidden={false} />
      <View style={styles.header}>
        <Body weight={BodyWeight.Regular} size={BodySizes.Large}>
          {strings.calmotive}
        </Body>
      </View>
      <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Body weight={BodyWeight.Bold} size={BodySizes.Large}>
          {codeStep ? strings.enterCode : strings.phoneNumber}
        </Body>
        <TextInput
          style={{...styles.phone_input, width: codeStep ? '40%' : '90%'}}
          keyboardType={'number-pad'}
          maxLength={codeStep ? 4 : undefined}
          value={codeStep ? code : phone}
          onChangeText={handleInputChange}
        />
      </View>
      <TouchableOpacity disabled={!isButtonActive} onPress={handleSubmit} style={styles.arrow_icon}>
        <Image source={ArrowIcon} style={{width: 30, height: 30}} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
