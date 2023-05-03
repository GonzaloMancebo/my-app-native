import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import ToastedCart from "../Toasted/ToastedCart";
import { styles } from "../Toasted/ToastedStyles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToasted } from "../../Store/actions/toasted.action";

function ToastedScreen() {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const toastedList = useSelector((state) => state.toasted.toasted);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
    dispatch(addToasted(product));
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.cart}></View>
      <FlatList
        data={toastedList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ToastedCart {...item} addToCart={addToCart} />
        )}
      />
    </View>
  );
}

export default ToastedScreen;
