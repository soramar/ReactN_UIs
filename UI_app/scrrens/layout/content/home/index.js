import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { Header } from "../../header";
import { Forms } from "../forms";
import { Footer } from "../../footer";
import { ToListButton } from "../../../../components/contents/HomeComponent/ToListButton";
import { ToFormButton } from "../../../../components/contents/HomeComponent/ToFormButton";

export const HomeContent = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View>
          <ToListButton navigation={navigation} />
      </View>
      <View>
          <ToFormButton navigation={navigation} />
      </View>
    </View>    
  );
}