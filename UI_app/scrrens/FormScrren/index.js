import React from 'react';
import {View, Text} from 'react-native';
import { Header } from '../layout/header';
import { FormContent } from '../layout/content/forms';
import { Footer } from '../layout/footer';

export const FormScrren = () => {
  return (
    <View style={{flex: 1}}>
      <FormContent />
      <Footer />
    </View>
  );
};
