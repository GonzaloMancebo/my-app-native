import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import data from "../data/data";
import ProductCart from "./ProductCart";

const imageback = {
  uri: "https://i.pinimg.com/236x/6c/fd/9f/6cfd9fa6349df218a5887d8fe8f6fc88--delicatessen-design-merchandising-ideas.jpg",
};

function ProductList() {
  return (
    <View>
      <ImageBackground source={imageback} style ={styles.imageBack}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Native app</Text>
      </ImageBackground>

      <FlatList
        data={data}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => <ProductCart {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: Constants.statusBarHeight,
    color: "white",
    fontWeight: "bold",
  },

  imageBack: {
    backgroundColor : "transparent"
  }
});

export default ProductList;
