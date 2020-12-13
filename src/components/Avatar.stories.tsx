import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Avatar from './Avatar';

storiesOf('Avatar', module).add('for users', () => (
  <Avatar
    image={
      'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
  />
));
