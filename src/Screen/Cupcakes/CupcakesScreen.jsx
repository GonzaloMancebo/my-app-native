import React, { useState } from "react";
import {
  View,
  FlatList,
  
} from "react-native";
import { StatusBar } from "expo-status-bar";
import data from "../../data/cupcakesData";
import CupcakesCart from "../Cupcakes/CupcakesCart"
import {styles} from "../Cupcakes/CupcakesStyles"



function CupcakesScreen() {
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
            <CupcakesCart {...item} addToCart={addToCart} />
          )}
        />
    </View>
  );
}



export default CupcakesScreen;
