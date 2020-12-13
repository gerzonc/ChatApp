import React from 'react';
import {
  View,
  Text,
  ImageProps,
  StyleSheet,
  Pressable,
  Image,
  GestureResponderEvent,
} from 'react-native';

interface Props {
  image: string;
  onPress?: ((event: GestureResponderEvent) => void) | null;
}

const Avatar = ({image, onPress}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Image style={styles.image} source={{uri: image}} />
    </Pressable>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#FFF',
  },
});
