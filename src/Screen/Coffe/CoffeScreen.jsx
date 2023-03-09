import React, { useState } from "react";
import { View, FlatList, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import data from "../../data/data";
import ProductCart from "./CoffeCart";
import { styles } from "../Coffe/CoffeStyles";

const imageback = {
  uri: "https://i.pinimg.com/236x/6c/fd/9f/6cfd9fa6349df218a5887d8fe8f6fc88--delicatessen-design-merchandising-ideas.jpg",
};

function CoffeScreen() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageback}
        style={styles.imageBack}
        resizeMode={"cover"}
      >
        <StatusBar style="auto" />
        <View style={styles.cart}></View>
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

export default CoffeScreen;
