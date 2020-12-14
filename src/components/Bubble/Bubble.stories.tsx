import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Bubble from '.';
import type {Contact, Message} from '../Chat/index';
import { View } from 'react-native';

const contact: Contact = {
  name: 'John Doe',
  phone_number: '+1 829 282 3276',
  status: 'Online',
  messages: [
    {
      sentTime: '8:00 PM',
      phone_number: '+1 829 282 3276',
      text: "Yoo bro what's the homework?",
      unread: true,
    },
  ],
};

const messageContact: Message = {
  sentTime: '8:00 PM',
  phone_number: '+1 829 282 3276',
  text: "Yoo bro what's the homework?",
  unread: true,
};

const myMessage: Message = {
  sentTime: '8:00 PM',
  phone_number: '+1 829 829 8229',

  text: "I don't know bro",
  unread: true,
};

storiesOf('Bubble', module).add('other user', () => (
  <Bubble contact={contact} message={messageContact} />
));

storiesOf('Bubble', module).add('my message', () => (
  <Bubble contact={contact} message={myMessage} />
));

storiesOf('Bubble', module).add('conversation', () => (
  <View>
    <Bubble contact={contact} message={messageContact} />
    <Bubble contact={contact} message={myMessage} />
  </View>
));
