import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screen/Login/LoginScreen";
import CoffeScreen from "../Screen/Coffe/CoffeScreen";
import CookiesScreen from "../Screen/Cookies/CookiesScreen";
import CupcakesScreen from "../Screen/Cupcakes/CupcakesScreen";
import BlendedScreen from "../Screen/Blended/BlendedScreen";
import ToastedScreen from "../Screen/Toasted/ToastedScreen";
import TabNavigator from "../Tab/TabNavigator";

const Stack = createStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
      
        }}
      >
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Coffee" component={CoffeScreen} />
        <Stack.Screen name="Cookies" component={CookiesScreen} />
        <Stack.Screen name="Cupcakes" component={CupcakesScreen} />
        <Stack.Screen name="Blended" component={BlendedScreen} />
        <Stack.Screen name="Toasted" component={ToastedScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
