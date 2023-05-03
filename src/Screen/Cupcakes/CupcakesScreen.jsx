import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import CupcakesCart from "../Cupcakes/CupcakesCart";
import { styles } from "../Cupcakes/CupcakesStyles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCupcake } from "../../Store/actions/cupcakes.action";

function CupcakesScreen() {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const cupcakeList = useSelector((state) => state.cupcake.cupcake);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
    dispatch(addCupcake(product));
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.cart}></View>
      <FlatList
        data={cupcakeList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CupcakesCart {...item} addToCart={addToCart} />
        )}
      />
    </View>
  );
}

export default CupcakesScreen;
