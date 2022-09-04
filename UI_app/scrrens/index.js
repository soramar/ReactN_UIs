import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Header } from './layout/header';
import { Footer } from './layout/footer';
import { ListScrren } from './ListScrren';

export const Scrrens = () => {
  return (
    <View style={{flex: 1}}>
        <ListScrren />
    </View>
  );
};

const styles = StyleSheet.create({});
