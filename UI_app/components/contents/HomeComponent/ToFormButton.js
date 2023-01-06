import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

export const ToFormButton = ({navigation}) => {
    return (
        <View style={styles.listButtonArea}>
        <Button title="Formへのボタン" style={styles.listButton} color="red"
         onPress={() => {
            navigation.navigate('FormScrren');
         }}></Button>
      </View>
    )
}

const styles = StyleSheet.create({
  listButtonArea: {
  },
  listButton: {
  }
});