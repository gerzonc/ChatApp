import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import colors from '../../../assets/colors';
import Avatar from '../Avatar';
import type {Contact} from '../Chat/index';

interface ChatHeaderTitleProps {
  contact: Contact;
}

const {width} = Dimensions.get('screen');

const ChatHeaderTitle = ({contact}: ChatHeaderTitleProps) => {
  return (
    <View style={styles.container}>
      <Avatar image={contact.image} size={32} />
      <View style={styles.chatBody}>
        <Text style={styles.name}>
          {contact.name ? contact.name : contact.phone_number}
        </Text>
      </View>
    </View>
  );
};

export default ChatHeaderTitle;

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
  name: {
    color: colors.contact,
    fontSize: 17,

    fontWeight: 'bold',
  },
  message: {
    color: colors.text,
  },
  messageUnread: {
    color: colors.text,
    fontWeight: 'bold',
  },
});
