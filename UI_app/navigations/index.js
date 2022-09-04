import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Screen } from '../scrrens';
import { ListScrren } from '../scrrens/ListScrren';
import { FormScrren } from '../scrrens/FormScrren';

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Screen" component={Screen} />
        <RootStack.Screen name="ListScrren" component={ListScrren} />
        <RootStack.Screen name="FormScrren" component={FormScrren} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;