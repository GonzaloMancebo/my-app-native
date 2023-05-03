import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screen/Login/LoginScreen";
import CoffeScreen from "../Screen/Coffe/CoffeScreen";
import CookiesScreen from "../Screen/Cookies/CookiesScreen";
import CupcakesScreen from "../Screen/Cupcakes/CupcakesScreen";
import BlendedScreen from "../Screen/Blended/BlendedScreen";
import ToastedScreen from "../Screen/Toasted/ToastedScreen";
import TopTabNavigator from "../Tab/TopTabNavigator";
import ContactScreen from "../Screen/Contact/ContactScreen";
import MapScreen from "../Screen/Maps/MapsScreen";

const Stack = createStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#E9BD70",
          },
          headerTitleStyle: {
            textAlign: "center",
            justifyContent: "center",
            color: "white",
          },
        }}
      >
        <Stack.Screen name="Home" component={TopTabNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Coffee" component={CoffeScreen} />
        <Stack.Screen name="Cookies" component={CookiesScreen} />
        <Stack.Screen name="Cupcakes" component={CupcakesScreen} />
        <Stack.Screen name="Blended" component={BlendedScreen} />
        <Stack.Screen name="Toasted" component={ToastedScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Maps" component={MapScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
