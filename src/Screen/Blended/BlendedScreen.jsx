import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import data from "../../data/blendedData";
import BlendedCart from "../Blended/BlendedCart";
import { styles } from "../Blended/BlendedStyles";

function BlendedScreen() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.cart}></View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BlendedCart {...item} addToCart={addToCart} />
        )}
      />
    </View>
  );
}

export default BlendedScreen;
