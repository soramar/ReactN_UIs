import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RootStackScreen from '../navigations/';
import {Screen} from '../scrrens/index';

export const App = () => {
  return (
    <View style={styles.appStyle}>
      <SafeAreaView style={{flex: 1}}>
        <RootStackScreen>
          <Screen />
        </RootStackScreen>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  appStyle: {
    flex: 1,
  },
});

export default App;
