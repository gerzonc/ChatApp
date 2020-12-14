import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Chat from '.';
import type {Contact} from '.';

const contact: Contact = {
  name: 'John Doe',
  phone_number: '+1 829 281 3276',
  status: 'Online',
};

storiesOf('Chat', module).add('by default', () => <Chat contact={contact} />);
