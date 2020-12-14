import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

interface BadgeProps {
  count: number;
}

const Badge = ({count}: BadgeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count > 99 ? '+99' : count}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    height: 28,
    width: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: colors.background,
  },
});
