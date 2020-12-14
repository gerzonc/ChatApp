import React from 'react';
import {
  View,
  ImageProps,
  StyleSheet,
  Pressable,
  Image,
  GestureResponderEvent,
  ImageSourcePropType,
} from 'react-native';

import images from '../../../assets/images';

interface Props {
  image?: string;
  onPress?: ((event: GestureResponderEvent) => void) | null;
  size?: number;
}

const Avatar = ({image, onPress, size}: Props) => {
  return (
    <View style={styles.shadows}>
      <Pressable onPress={onPress}>
        <Image
          style={
            size
              ? {
                  width: size,
                  height: size,
                  borderRadius: size! / 2,
                  overflow: 'hidden',
                  borderWidth: 3,
                  borderColor: '#FFF',
                }
              : styles.image
          }
          source={images.avatar_placeholder}
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
