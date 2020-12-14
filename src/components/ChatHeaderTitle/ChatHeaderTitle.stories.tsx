import React from 'react';
import {storiesOf} from '@storybook/react-native';

import ChatHeaderTitle from '.';
import type {Contact} from '../Chat/index';

const contact: Contact = {
  name: 'John Doe',
  phone_number: '+1 829 281 3276',
  status: 'Online',
  messages: [
    {
      sentTime: '8:00 PM',
      phone_number: '+1 829 281 3276',
      text: "Yoo bro what's the homework?",
      unread: true,
    },
  ],
};

storiesOf('ChatHeaderTitle', module).add('by default', () => (
  <ChatHeaderTitle contact={contact} />
));
