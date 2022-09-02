import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export const ContentLists = ({myListData}) => {
  console.log('リストデータ', myListData);

  return (
    <View style={styles.contentLists}>
      <FlatList data={myListData} renderItem={ContentList} />
    </View>
  );
};

const ContentList = listData => {
  return (
    <View style={styles.contentView}>
      <View style={styles.contentList}>
        <Text>{listData.item.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentLists: {
    flex: 1,
    // backgroundColor: 'blue',
  },
  contentView: {
    flex: 1,
    backgroundColor: 'green',
  },
  contentList: {
    flex: 0.5,
    backgroundColor: 'yellow',
  },
});
