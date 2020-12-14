import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../assets/colors';
import Searchbar from '../Searchbar';

const {width, height} = Dimensions.get('screen');

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <Text style={styles.heading}>Messages</Text>
      <Searchbar />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width,
    height: Platform.select({
      ios: height * 0.30,
      android: 188,
    }),
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: colors.primary,
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 5,
  },
  heading: {
    fontSize: 32,
    marginBottom: 14,
    color: colors.background,
    fontWeight: 'bold',
  },
});
