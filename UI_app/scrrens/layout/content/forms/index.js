import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TextForm } from '../../../../components/contents/FormComponent/TextForm';
import { CheckBox } from '../../../../components/contents/FormComponent/CheckBox';

export const FormContent = () => {
  return (
    <View style={styles.content}>
      <View>
         <TextForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  }
});