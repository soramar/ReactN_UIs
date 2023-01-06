import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

export const ToListButton = ({navigation}) => {
    return (
        <View style={styles.listButtonArea}>
        <Button title="Listへのボタン" style={styles.listButton} color="red"
         onPress={() => {
            navigation.navigate('ListScrren');
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