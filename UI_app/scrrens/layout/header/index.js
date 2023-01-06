import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text>header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cornsilk',
  },
});
