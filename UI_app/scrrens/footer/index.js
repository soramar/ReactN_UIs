import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 0.8,
    backgroundColor: 'azure',
  },
});
