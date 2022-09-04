import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

export const ListButton = ({navigation}) => {
    return (
        <View style={styles.listButtonArea}>
        <Button title="リストのボタン" style={styles.listButton} color="red"
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