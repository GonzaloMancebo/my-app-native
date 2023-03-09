import React, { useState } from "react";
import {
  View,
  FlatList,
  
} from "react-native";
import { StatusBar } from "expo-status-bar";
import data from "../../data/toastedData";
import ToastedCart from "../Toasted/ToastedCart"
import {styles} from "../Toasted/ToastedStyles"



function ToastedScreen() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }


  return (
    <View style={styles.container}>
      
        <StatusBar style="auto" />
        <View style={styles.cart}>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ToastedCart {...item} addToCart={addToCart} />
          )}
        />
    </View>
  );
}



export default ToastedScreen;
