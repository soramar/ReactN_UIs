import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Header } from './layout/header';
import { Footer } from './layout/footer';
import { HomeContent } from './layout/content/home';

export const Screen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
        <Header />
        <HomeContent navigation={navigation} />
        <Footer />
    </View>
  );
};

const styles = StyleSheet.create({});
