import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from './header';
import {Content} from './content';
import {Footer} from './footer';

export const Scrrens = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <Content />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({});
