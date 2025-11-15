import React, { useEffect } from "react";
import ShopNavigator from "./src/Navigation/ShopNavigator";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import TabNavigator from "./src/Tab/TabNavigator";
import Store from "./src/Store";
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";

function App() {
  const [loaded] = useFonts({
    RobotoItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
    RobotoItalicBold: require("./assets/fonts/Roboto-BoldItalic.ttf"),
  });

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.preventAutoHideAsync();
      if (loaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Provider store={Store}>
      <ShopNavigator>
        <TabNavigator />
      </ShopNavigator>
      <Toast/>
    </Provider>
  );
}

export default App;
