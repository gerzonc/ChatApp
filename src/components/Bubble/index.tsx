import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import colors from '../../../assets/colors';
import {Contact, Message} from '../Chat';

interface BubbleProps {
  contact: Contact;
  message: Message;
}

const {width} = Dimensions.get('screen');

const Bubble = ({contact, message}: BubbleProps) => {
  const isContactMessage = message.phone_number === contact.phone_number;

  return (
    <View>
      <View style={isContactMessage ? styles.contactMessage : styles.myMessage}>
        <Text
          numberOfLines={4}
          style={isContactMessage ? styles.textContact : styles.myText}>
          {message.text}
        </Text>
        <Text style={isContactMessage ? styles.hourContact : styles.myHour}>
          {message.sentTime}
        </Text>
      </View>
    </View>
  );
};

export default Bubble;

const styles = StyleSheet.create({
  contactMessage: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    marginHorizontal: 18,
    marginBottom: 12,
    paddingHorizontal: 18,
    paddingVertical: 16,
    maxWidth: width * 0.65,
    elevation: 4,
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 5,
  },
  myMessage: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginHorizontal: 18,
    paddingHorizontal: 18,
    paddingVertical: 16,
    maxWidth: width * 0.65,
    elevation: 4,
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 5,
  },
  textContact: {
    fontWeight: 'bold',
    color: colors.contact,
    fontSize: 16,
  },
  myText: {
    fontWeight: 'bold',
    color: colors.background,
    fontSize: 16,
  },
  hourContact: {
    alignSelf: 'flex-start',
    fontSize: 12,
  },
  myHour: {
    alignSelf: 'flex-end',
    color: colors.background,
    fontSize: 12,
  },
});
