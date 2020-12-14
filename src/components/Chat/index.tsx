import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Avatar from '../Avatar';

type Message = {
  sentTime: Date;
  text: string;
  unread: boolean;
};

export type Contact = {
  image?: string;
  name: string;
  status: string;
  phone_number: string;
  messages?: Message[];
};

interface ChatProps {
  contact: Contact;
}

const {width} = Dimensions.get('screen');

const Chat = ({contact}: ChatProps) => {
  return (
    <View style={styles.container}>
      <Avatar image={contact.image} />
      <View style={styles.chatBody}>
        <Text style={styles.name}>
          {contact.name ? contact.name : contact.phone_number}
        </Text>
        <Text>
          {contact.messages
            ? contact.messages[contact.messages.length - 1].text
            : contact.status}
        </Text>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width * 0.9,
  },
  chatBody: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
