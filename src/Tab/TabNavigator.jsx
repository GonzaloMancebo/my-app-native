import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../Screen/Home/HomeScreen";
import { bottomTabsStyles } from "./TabNavigatorStyle";
import ProfileScreen from "../Screen/Profile/ProfileScreen";
import ProductsScreen from "../Screen/Products/ProductsScreen";

const BottomTabs = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...bottomTabsStyles.screenOptions,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <BottomTabs.Screen
        name="Menu"
        component={ProductsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant-outline" size={size} color={color} />
          ),
        }}
      />

      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
