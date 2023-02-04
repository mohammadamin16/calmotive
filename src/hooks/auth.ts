import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getPhone = async () => {
  return await AsyncStorage.getItem('phone');
};

export const usePhone = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [phone, setPhone] = useState<string | null>(null);

  const savePhone = async (phone: string) => {
    await AsyncStorage.setItem('phone', phone);
    setPhone(phone);
  };

  const logout = async (phone: string) => {
    await AsyncStorage.removeItem('phone');
    setPhone(null);
  };

  useEffect(() => {
    getPhone().then(res => {
      setPhone(res);
      setIsLoading(false);
    });
  }, []);
  return {phone, isLoading, savePhone, logout};
};
