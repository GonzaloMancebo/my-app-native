import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screen/Home/HomeScreen";
import CoffeScreen from "../Screen/Coffe/CoffeScreen";
import CookiesScreen from "../Screen/Cookies/CookiesScreen";
import CupcakesScreen from "../Screen/Cupcakes/CupcakesScreen";
import BlendedScreen from "../Screen/Blended/BlendedScreen";
import ToastedScreen from "../Screen/Toasted/ToastedScreen";

const Stack = createStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Coffe" component={CoffeScreen} />
        <Stack.Screen name="Cookies" component={CookiesScreen} />
        <Stack.Screen name="Cupcakes" component={CupcakesScreen} />
        <Stack.Screen name="Blended" component={BlendedScreen} />
        <Stack.Screen name="Toasted" component={ToastedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
