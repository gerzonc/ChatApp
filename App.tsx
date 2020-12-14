import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';

import {List, Detail} from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  const MainStack = () => {
    return (
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={List} options={{headerShown: false}}/>
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
