import {RouteProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../../assets/colors';
import {Contact} from '../../components/Chat';
import ChatHeaderTitle from '../../components/ChatHeaderTitle';

type RootStackParamList = {
  List: undefined;
  Detail: {contact: Contact};
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type Props = {
  route: DetailScreenRouteProp;
};

const Detail = ({route}: Props) => {
  const {contact} = route.params;
  const navigation = useNavigation();

  React.useLayoutEffect(() =>
    navigation.setOptions({
      headerLeft: () => (
        <Icon name="back-arrow" size={25} color={colors.background} />
      ),
      headerTitle: () => <ChatHeaderTitle contact={contact} />,
      backgroundColor: colors.primary,
    }),
  );
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Detail;
