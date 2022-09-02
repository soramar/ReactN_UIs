import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListPage} from './list/index';

const Stack = createNativeStackNavigator();

export const Content = () => {
  return (
    <View style={{flex: 1}}>
      <ListPage />
    </View>
  );
};
