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
import DeviceInfo from 'react-native-device-info';
import colors from '../../../assets/colors';
import Searchbar from '../Searchbar';

const {width, height} = Dimensions.get('screen');

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <Text style={styles.heading}>Messages</Text>
      <Searchbar />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width,
    height: DeviceInfo.hasNotch() ? 228 : Platform.OS === 'ios' ? 198 : 188,
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33,
    paddingTop: 50,
    paddingHorizontal: 16,

    shadowOpacity: 0.4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 5,
    backgroundColor: colors.primary,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 14,
    color: colors.background,
  },
});
