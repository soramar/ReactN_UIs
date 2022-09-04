import React from "react";
import {View, TextInput, StyleSheet} from 'react-native';

export const TextForm = () => {
  return (
    <View style={styles.formArea}>
        <View>
            <TextInput style={StyleSheet.textForm} placeholder="テキスト"></TextInput>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  formArea: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    marginTop: 30,
  },
  textForm: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#e0e9f1',
    borderWidth: 1,
    borderRadius: 5,
  }
})