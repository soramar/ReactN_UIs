import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const FormContent = () => {
  return (
    <View style={styles.content}>
      <Text>フォームページ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1
  }
});