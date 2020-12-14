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

import images from '../../../assets/images';

interface Props {
  image?: string;
  onPress?: ((event: GestureResponderEvent) => void) | null;
}

const Avatar = ({image, onPress}: Props) => {
  return (
    <View style={styles.shadows}>
      <Pressable onPress={onPress}>
        <Image
          style={styles.image}
          source={image ? {uri: image} : images.avatar_placeholder}
        />
      </Pressable>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  image: {
    width: 62,
    height: 62,
    borderRadius: 62 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#FFF',
  },
  shadows: {
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
      width: 1,
    },
  },
});
