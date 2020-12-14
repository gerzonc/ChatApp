import React from 'react';
import {View, TextInput, StyleSheet, Dimensions, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../assets/colors';

const {width} = Dimensions.get('screen');

const Searchbar = () => {
  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        name="search"
        size={25}
        color={colors.secondary}
      />
      <TextInput
        style={styles.input}
        placeholder="Search by name"
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholderTextColor={colors.secondary}
        autoCapitalize="words"
        textContentType="name"
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 50,
    width: width * 0.9,
    borderRadius: 15,
    backgroundColor: colors.background,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    fontWeight: 'bold',
    width: width * 0.7,
    fontSize: 17,
    color: colors.secondary,
  },
});
