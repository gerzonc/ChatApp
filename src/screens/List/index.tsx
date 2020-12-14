import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import Avatar from '../../components/Avatar';
import Header from '../../components/Header';
import styles from '../List/styles';
import {Contact} from '../../components/Chat';

const List = () => {
  return (
    <View>
      <Header />
      {/* <FlatList data={data} renderItem={({item, index}) => _renderItem(item)} /> */}
    </View>
  );
};

export default List;
