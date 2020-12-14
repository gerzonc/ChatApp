import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Avatar from '.';

storiesOf('Avatar', module).add('with image', () => (
  <Avatar
    image={
      'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
  />
));

storiesOf('Avatar', module).add('without image', () => <Avatar />);
