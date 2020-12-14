import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Avatar from '../../components/Avatar';
import Header from '../../components/Header';
import styles from '../List/styles';

interface IChat {
  avatar: string;
  name: string;
}

const data: IChat[] = [];

const List = () => {
  const _renderItem = (item: IChat) => (
    <View style={styles.chatContainer}>
      <Avatar image={item.avatar} />
      <View style={styles.chatBody}>
        <Text>{item.name}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <Header />
      {/* <FlatList data={data} renderItem={({item, index}) => _renderItem(item)} /> */}
    </View>
  );
};

export default List;
