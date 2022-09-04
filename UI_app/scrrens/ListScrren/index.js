import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Header } from '../layout/header'; 
import { ListPage } from '../layout/content/list';
import { Footer } from '../layout/footer';

export const ListScrren = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ListPage navigation={navigation} />
      <Footer />
    </View>
  );
};