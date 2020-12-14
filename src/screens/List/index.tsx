import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';

import Avatar from '../../components/Avatar';
import Header from '../../components/Header';
import styles from '../List/styles';
import Chat, {Contact} from '../../components/Chat';
import images from '../../../assets/images';

import {createServer} from 'miragejs';

createServer({
  routes() {
    this.get('/api/chats', () => {
      return {
        chats: [
          {
            id: 1,
            name: 'Jane Doe',
            phone_number: '+1 809 809 8009',
            status: 'Online',
            messages: [
              {
                sentTime: '8:00 PM',
                phone_number: '+1 809 809 8009',
                text: "Yoo bro what's the homework?",
                unread: true,
              },
            ],
          },
          {
            id: 2,
            name: 'John Doe',
            phone_number: '+1 809 819 8119',
            status: 'Online',
            messages: [
              {
                sentTime: '7:50 PM',
                phone_number: '+1 809 819 8119',
                text: 'How you doing?',
                unread: false,
              },
            ],
          },
          {
            id: 3,
            name: 'Mom',
            image: images.person_three,
            phone_number: '+1 809 829 8229',
            status: 'Offline',
            messages: [
              {
                sentTime: '3:40 PM',
                phone_number: '+1 809 829 8229',
                text: 'Understandable have a nice day',
                unread: false,
              },
              {
                sentTime: '3:42 PM',
                phone_number: '+1 809 829 8329',
                text: 'No problem',
                unread: false,
              },
            ],
          },
          {
            id: 4,
            name: 'My Wife',
            image: images.person_four,
            phone_number: '+1 809 839 8339',
            status: 'Online',
            messages: [
              {
                sentTime: '7:10 AM',
                phone_number: '+1 809 839 8339',
                text: 'Our dog is stuck in the oven come help me',
                unread: false,
              },
              {
                sentTime: '7:12 AM',
                phone_number: '+1 809 839 8339',
                text: 'Never mind it was a picture of him lol',
                unread: false,
              },
            ],
          },
          {
            id: 5,
            name: 'Jack Daniels',
            image: images.person_five,
            phone_number: '+1 809 849 8449',
            status: 'Offline',
            messages: [
              {
                sentTime: '3:10 AM',
                phone_number: '+1 809 849 8449',
                text: 'I need no vaccine, trust me',
                unread: true,
              },
              {
                sentTime: '3:56 AM',
                phone_number: '+1 809 849 8449',
                text: 'look at dis youtube expert: ',
                unread: true,
              },
            ],
          },
          {
            id: 6,
            name: 'Elon Musk',
            image: images.person_six,
            phone_number: '+1 809 859 8559',
            status: 'Do not Disturb',
            messages: [
              {
                sentTime: '12:10 AM',
                phone_number: '+1 809 859 8559',
                text: '010101110110100001100001011101000',
                unread: false,
              },
              {
                sentTime: '12:32 AM',
                phone_number: '+1 809 829 8559',
                text: 'Hmm ok?',
                unread: false,
              },
            ],
          },
        ],
      };
    });
  },
});

const List = () => {
  const [chats, setChats] = React.useState([]);
  const navigation = useNavigation();

  React.useEffect(() => {
    fetch('/api/chats')
      .then((res) => res.json())
      .then((json) => setChats(json.chats));
  }, []);

  const _renderItem = (item: Contact) => (
    <Chat
      contact={item}
      onPress={() => navigation.navigate('Detail', {contact: item})}
    />
  );

  return (
    <FlatList
      ListHeaderComponent={() => <Header />}
      contentContainerStyle={{alignItems: 'center'}}
      data={chats}
      keyExtractor={(item, index) => item + String(index)}
      renderItem={({item, index}: any) => {
        return _renderItem(item);
      }}
    />
  );
};

export default List;
