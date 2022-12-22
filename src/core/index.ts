import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://192.168.113.190:8000';

const endpoints = {
  musics: BASE_URL + '/musics',
  signup: BASE_URL + '/auth/signup',
};

const MOCK_TOKEN =
  '5b2fad16dfb0828d41ecdc8170e61a7f0457da6c1d66a5a71c4bbbf8e86f0f3a5e1434c8f7715750ac1329cb616ac85d8d1f7098257db4a420a0b637d9c676b8';

export const signup = (data: RequestSignUp) => {
  axios
    .post(endpoints.signup, data)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.info(error);
    });
};

export const get_musics = () => {
  axios
    .post(endpoints.musics, {
      API_TOKEN: MOCK_TOKEN,
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const saveUser = async () => {
  try {
    AsyncStorage.setItem('user', JSON.stringify({name: 'Mammad'}));
  } catch (error) {
    console.log('Error');
  }
};

export const getUser = async () => {
  try {
    return AsyncStorage.getItem('user');
  } catch (error) {
    console.log('Error');
  }
};
