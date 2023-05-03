import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CoffeScreen from "../Screen/Coffe/CoffeScreen";
import HomeScreen from "../Screen/Home/HomeScreen";
import CookiesScreen from "../Screen/Cookies/CookiesScreen";
import BlendedScreen from "../Screen/Blended/BlendedScreen";
import CupcakesScreen from "../Screen/Cupcakes/CupcakesScreen";
import ToastedScreen from "../Screen/Toasted/ToastedScreen";
import ContactScreen from "../Screen/Contact/ContactScreen";
import { topTabsStyles } from "./TabNavigatorStyle";

const TopTabs = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <TopTabs.Navigator
    initialRouteName="Start"
    screenOptions={topTabsStyles.screenOptions}
  >
      <TopTabs.Screen name="Start" component={HomeScreen} />
      <TopTabs.Screen name="Coffee" component={CoffeScreen} />
      <TopTabs.Screen name="Cookies" component={CookiesScreen} />
      <TopTabs.Screen name="Blended" component={BlendedScreen} />
      <TopTabs.Screen name="Cupcakes" component={CupcakesScreen} />
      <TopTabs.Screen name="Toasted" component={ToastedScreen} />
      <TopTabs.Screen name="Contact" component={ContactScreen} />
    </TopTabs.Navigator>
  );
}

export default TopTabNavigator;
