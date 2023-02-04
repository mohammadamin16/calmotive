import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Body, BodySizes, BodyWeight} from '../UI/texts';
import {strings} from '../assets/strings';
import {useTheme} from '../UI/theme';

export const Header: React.FC = () => {
  const theme = useTheme();

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
  });

  return (
    <View style={styles.header}>
      <Body weight={BodyWeight.Regular} size={BodySizes.Large}>
        {strings.calmotive}
      </Body>
    </View>
  );
};
