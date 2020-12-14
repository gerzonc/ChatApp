import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, FlatList, Dimensions, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../../assets/colors';
import Bubble from '../../components/Bubble';
import {Contact} from '../../components/Chat';
import ChatHeaderTitle from '../../components/ChatHeaderTitle';
import MessageBox from '../../components/MessageBox';

type RootStackParamList = {
  List: undefined;
  Detail: {contact: Contact};
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Detail'
>;

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

const {width, height} = Dimensions.get('screen');

const Detail = ({route, navigation}: Props) => {
  const {contact} = route.params;

  React.useLayoutEffect(() =>
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back"
            size={25}
            color={colors.background}
            style={{margin: 10, justifyContent: 'center', alignSelf: 'center'}}
          />
        </Pressable>
      ),
      headerTitle: () => (
        <View style={{marginLeft: 50}}>
          <ChatHeaderTitle contact={contact} />
        </View>
      ),
      headerStyle: {backgroundColor: colors.primary},
      headerStatusBarHeight: 65,
    }),
  );
  return (
    <View style={{flex: 1, backgroundColor: '#F5FCFF'}}>
      <FlatList
        data={contact.messages?.reverse()}
        keyExtractor={(item, index) => item + String(index)}
        inverted
        renderItem={({item, index}: any) => {
          return <Bubble contact={contact} message={item} />;
        }}
      />
      <MessageBox />
    </View>
  );
};

export default Detail;
