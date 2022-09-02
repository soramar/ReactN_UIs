import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ContentLists} from '../../components/contents';

export const Content = () => {
  //   const [listData, setListData] = useState(10);

  //   const getListData = () => {
  //     return listData;
  //   };

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
