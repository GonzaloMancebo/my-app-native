import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screen/Login/LoginScreen";
import TabNavigator from "../Tab/TabNavigator";
import ProductsScreen from "../Screen/Products/ProductsScreen";
import CheckOutScreen from "../Screen/Checkout/CheckOutScreen";
import OrderSuccessScreen from "../Screen/OrderSuccess/OrderSuccessScreen";

const Stack = createStackNavigator();

const Navigator = ({ openCartModal }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          children={() => <TabNavigator openCartModal={openCartModal} />}
        />

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Checkout" component={CheckOutScreen} />
        <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
