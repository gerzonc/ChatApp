import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  GestureResponderEvent,
} from 'react-native';

import colors from '../../../assets/colors';
import Avatar from '../Avatar';
import Badge from '../Badge';

export type Message = {
  sentTime: string;
  phone_number: string;
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
  onPress?: (event: GestureResponderEvent) => void;
}

const {width} = Dimensions.get('screen');

const Chat = ({contact, onPress}: ChatProps) => {
  const unreadMessages = contact.messages
    ? contact.messages.filter((message) => message.unread)
    : [];

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Avatar image={contact.image} />
        <View style={styles.chatBody}>
          <Text style={styles.name}>
            {contact.name ? contact.name : contact.phone_number}
          </Text>
          <Text
            style={
              unreadMessages.length ? styles.messageUnread : styles.message
            }>
            {contact.messages
              ? contact.messages[contact.messages.length - 1].text
              : contact.status}
          </Text>
        </View>
        {contact.messages && unreadMessages.length ? (
          <View style={styles.activityBody}>
            <Text style={styles.time}>
              {contact.messages[contact.messages.length - 1].sentTime}
            </Text>
            <Badge count={unreadMessages.length} />
          </View>
        ) : (
          contact.messages && (
            <View style={styles.noBadge}>
              <Text style={styles.time}>
                {contact.messages[contact.messages.length - 1].sentTime}
              </Text>
            </View>
          )
        )}
      </View>
    </Pressable>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    flexDirection: 'row',
    marginVertical: 10,
  },
  chatBody: {
    marginLeft: 12,
    width: width * 0.55,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  activityBody: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  noBadge: {
    marginTop: 14,
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
