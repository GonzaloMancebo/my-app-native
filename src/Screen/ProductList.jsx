import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import data from "../data/data";
import ProductCart from "./ProductCart";
import { AntDesign } from "react-native-vector-icons";

const imageback = {
  uri: "https://i.pinimg.com/236x/6c/fd/9f/6cfd9fa6349df218a5887d8fe8f6fc88--delicatessen-design-merchandising-ideas.jpg",
};

function ProductList() {
  const [cartCount, setCartCount] = useState(0);

  function addToCart(product) {
    setCartCount(cartCount + 1);
  }

  console.log(cartCount);

  return (
    <View style = {styles.container}>
      <ImageBackground
        source={imageback}
        style={styles.imageBack}
        resizeMode={"cover"}
      >
        <StatusBar style="auto" />
        <View style={styles.cart}>
          <Text style={styles.title}>
            Native app
            <TouchableOpacity>
              <Text style={styles.count}>{cartCount}</Text>

              <AntDesign name="shoppingcart" size={24} color="black" />
            </TouchableOpacity>
          </Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCart {...item} addToCart={addToCart} />
          )}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: Constants.statusBarHeight,
    color: "white",
    fontWeight: "bold",
  },

  imageBack: {
    backgroundColor: "transparent",
    flex: 1,
  },

  count: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default ProductList;
