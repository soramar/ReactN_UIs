import React from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';

export const ContentLists = ({myListData}) => {
  console.log('リストデータ', myListData);

  return (
    <View style={styles.contentLists}>
      <FlatList
        data={myListData}
        renderItem={ContentList}
        keyExtractor={listData => listData.id}
      />
    </View> 
  );
};

const ContentList = listData => {
  return (
    <View style={styles.contentList}>
      <View style={styles.contentOnceData}>
        <Text style={styles.listText}>{listData.item.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentLists: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'green',
  },
  contentList: {
    left: '40%',
    flex: 1,
    // backgroundColor: 'blue',
  },
  contentOnceData: {
    flex: 1,
    // backgroundColor: 'red',
  },
  listText: {
    fontSize: 20,
    marginTop: 50,
  },
});
