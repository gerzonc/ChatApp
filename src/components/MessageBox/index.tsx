import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../assets/colors';

const {width} = Dimensions.get('screen');

const MessageBox = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Icon
          style={styles.camera}
          name="camera"
          size={25}
          color={colors.background}
        />
      </Pressable>
      <View style={styles.divider} />
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholderTextColor={colors.background}
        autoCapitalize="words"
      />
      <Pressable>
        <Icon
          style={styles.send}
          name="send-sharp"
          size={25}
          color={colors.background}
        />
      </Pressable>
    </View>
  );
};

export default MessageBox;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 8,
    paddingHorizontal: 18,
    height: 56,
    width,
    backgroundColor: colors.secondary,
  },
  camera: {
    marginRight: 10,
  },
  send: {
    marginLeft: 34,
    alignSelf: 'flex-end',
  },
  divider: {
    height: 34,
    width: 1,
    backgroundColor: colors.primary,
  },
  input: {
    fontWeight: 'bold',
    width: width * 0.65,
    fontSize: 17,
    marginLeft: 10,
    color: colors.background,
  },
});
