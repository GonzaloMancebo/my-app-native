import React, { useState } from "react";
import { View, FlatList, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import CoffeCart from "./CoffeCart";
import { styles } from "../Coffe/CoffeStyles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCoffee } from "../../Store/actions/coffee.action";


const imageback = {
  uri: "https://i.pinimg.com/236x/6c/fd/9f/6cfd9fa6349df218a5887d8fe8f6fc88--delicatessen-design-merchandising-ideas.jpg",
};

function CoffeScreen() {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const coffeeList = useSelector(state => state.coffee.coffee);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
    dispatch(addCoffee(product));
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
          data={coffeeList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CoffeCart {...item} addToCart={addToCart} />
          )}
        />
      </ImageBackground>
    </View>
  );
}

export default CoffeScreen;