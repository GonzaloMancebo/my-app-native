import React, { useState } from "react";
import {
  View,
  FlatList,
  
} from "react-native";
import { StatusBar } from "expo-status-bar";
import data from "../../data/cookiesData";
import CookiesCart from "../Cookies/CookiesCart";
import { styles } from "../Cookies/CookiesStyles";




function CookiesScreen() {
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
            <CookiesCart {...item} addToCart={addToCart} />
          )}
        />
    </View>
  );
}



export default CookiesScreen;
