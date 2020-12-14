import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Badge from '.';

storiesOf('Badge', module).add('with count 2', () => <Badge count={2} />);

storiesOf('Badge', module).add('with count 10', () => <Badge count={10} />);

storiesOf('Badge', module).add('with count 100', () => <Badge count={100} />);
