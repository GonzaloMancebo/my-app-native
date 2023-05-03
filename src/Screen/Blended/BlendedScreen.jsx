import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import BlendedCart from "../Blended/BlendedCart";
import { styles } from "../Blended/BlendedStyles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addBlended } from "../../Store/actions/blended.action";

function BlendedScreen() {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const blendedList = useSelector((state) => state.blended.blended);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
    dispatch(addBlended(product));
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.cart}></View>
      <FlatList
        data={blendedList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BlendedCart {...item} addToCart={addToCart} />
        )}
      />
    </View>
  );
}

export default BlendedScreen;
