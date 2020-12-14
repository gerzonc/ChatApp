import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../assets/colors';
import Avatar from '../Avatar';
import Badge from '../Badge';

type Message = {
  sentTime: string;
  text: string;
  unread: boolean;
};

export type Contact = {
  image?: string;
  name?: string;
  status: string;
  phone_number: string;
  messages?: Message[];
};

interface ChatProps {
  contact: Contact;
}

const {width} = Dimensions.get('screen');

const Chat = ({contact}: ChatProps) => {
  const unreadMessages = contact.messages
    ? contact.messages.filter((message) => message.unread)
    : [];

  return (
    <View style={styles.container}>
      <Avatar image={contact.image} />
      <View style={styles.chatBody}>
        <Text style={styles.name}>
          {contact.name ? contact.name : contact.phone_number}
        </Text>
        <Text style={styles.message}>
          {contact.messages
            ? contact.messages[contact.messages.length - 1].text
            : contact.status}
        </Text>
      </View>
      {contact.messages && (
        <View style={styles.activityBody}>
          <Text style={styles.time}>
            {contact.messages[contact.messages.length - 1].sentTime}
          </Text>
          {unreadMessages.length && <Badge count={unreadMessages.length} />}
        </View>
      )}
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    flexDirection: 'row',
  },
  chatBody: {
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  activityBody: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  name: {
    color: colors.contact,
    fontSize: 17,

    fontWeight: 'bold',
  },
  message: {
    color: colors.text,
  },
  time: {
    color: colors.primary,
  },
  messageUnread: {
    color: colors.text,
    fontWeight: 'bold',
  },
});
