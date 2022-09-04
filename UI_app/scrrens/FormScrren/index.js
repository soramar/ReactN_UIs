import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { Header } from "../layout/header";
import { Forms } from "../layout/content/forms";
import { Footer } from "../layout/footer";

export const FormScrren = ({navigation}) => {
  return (
    <View>
      <Header />
      <Forms />
      <Footer />
    </View>
  );
}