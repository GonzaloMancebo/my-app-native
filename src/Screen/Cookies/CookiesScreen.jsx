import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import CookiesCart from "../Cookies/CookiesCart";
import { styles } from "../Cookies/CookiesStyles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCookie } from "../../Store/actions/cookies.action";

function CookiesScreen() {
  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState([]);
  const cookieList = useSelector(state => state.cookie.cookie);


  function addToCart(product) {
    setCartItems([...cartItems, product]);
    dispatch(addCookie(product));

  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.cart}></View>
      <FlatList
        data={cookieList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CookiesCart {...item} addToCart={addToCart} />
        )}
      />
    </View>
  );
}

export default CookiesScreen;
