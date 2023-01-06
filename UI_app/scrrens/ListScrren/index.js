import React from 'react';
import {View, Text} from 'react-native';
import { Header } from '../layout/header';
import { ListContent } from '../layout/content/list';
import { Footer } from '../layout/footer';

export const ListScrren = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ListContent />
      <Footer />
    </View>
  );
};
