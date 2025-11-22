import { useContext } from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartContext } from "../Context/CartContext";
import HomeScreen from "../Screen/Home/HomeScreen";
import ProductsScreen from "../Screen/Products/ProductsScreen";
import ProfileScreen from "../Screen/Profile/ProfileScreen";

const BottomTabs = createBottomTabNavigator();

export default function TabNavigator({ openCartModal }) {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
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
            <View>
              <Ionicons name="restaurant-outline" size={size} color={color} />

              {totalItems > 0 && (
                <View
                  style={{
                    position: "absolute",
                    top: -6,
                    right: -10,
                    backgroundColor: "red",
                    borderRadius: 10,
                    minWidth: 18,
                    paddingHorizontal: 4,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 11,
                      fontWeight: "bold",
                    }}
                  >
                    {totalItems}
                  </Text>
                </View>
              )}
            </View>
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            if (totalItems > 0) {
              e.preventDefault();
              openCartModal(); 
            }
          },
        })}
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
