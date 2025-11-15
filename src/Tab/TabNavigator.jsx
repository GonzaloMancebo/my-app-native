import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CoffeScreen from "../Screen/Coffe/CoffeScreen";
import HomeScreen from "../Screen/Home/HomeScreen";
import CookiesScreen from "../Screen/Cookies/CookiesScreen";
import BlendedScreen from "../Screen/Blended/BlendedScreen";
import CupcakesScreen from "../Screen/Cupcakes/CupcakesScreen";
import ToastedScreen from "../Screen/Toasted/ToastedScreen";
import { bottomTabsStyles } from "./TabNavigatorStyle";

const TopTabs = createMaterialTopTabNavigator();

function TabNavigator() {
  return (
    <TopTabs.Navigator
      initialRouteName="Home"
      screenOptions={bottomTabsStyles.screenOptions}
    >
      <TopTabs.Screen name="Home" component={HomeScreen} />
      <TopTabs.Screen name="Coffee" component={CoffeScreen} />
      <TopTabs.Screen name="Cookies" component={CookiesScreen} />
      <TopTabs.Screen name="Blended" component={BlendedScreen} />
      <TopTabs.Screen name="Cupcakes" component={CupcakesScreen} />
      <TopTabs.Screen name="Toasted" component={ToastedScreen} />
    </TopTabs.Navigator>
  );
}

export default TabNavigator;
