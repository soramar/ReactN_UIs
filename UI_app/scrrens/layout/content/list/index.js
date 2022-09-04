import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ContentLists} from '../../../../components/contents/ListComponent/FlatList';

export const ListContent = () => {
  const myListData = [
    {
      id: 1,
      title: 'listData01',
      subTitle: 'サブタイトル1',
      discription: '内容内容内容内容内容内容...',
    },
    {
      id: 2,
      title: 'istData02',
      subTitle: 'サブタイトル2',
      discription: '内容内容内容内容内容内容...',
    },
    {
      id: 3,
      title: 'istData03',
      subTitle: 'サブタイトル3',
      discription: '内容内容内容内容内容内容...',
    },
    {
      id: 4,
      title: 'istData4',
      subTitle: 'サブタイトル4',
      discription: '内容内容内容内容内容内容...',
    },
    {
      id: 5,
      title: 'istData05',
      subTitle: 'サブタイトル5',
      discription: '内容内容内容内容内容内容...',
    },
    {
      id: 6,
      title: 'istData06',
      subTitle: 'サブタイトル6',
      discription: '内容内容内容内容内容内容...',
    },
    {
      id: 7,
      title: 'istData07',
      subTitle: 'サブタイトル7',
      discription: '内容内容内容内容内容内容...',
    },
    {
      id: 8,
      title: 'istData08',
      subTitle: 'サブタイトル8',
      discription: '内容内容内容内容内容内容...',
    },
    {
      id: 9,
      title: 'istData09',
      subTitle: 'サブタイトル9',
      discription: '内容内容内容内容内容内容...',
    },
  ];

  return (
    <View style={styles.content}>
      <ContentLists myListData={myListData} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
