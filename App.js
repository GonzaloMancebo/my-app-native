import React, { useEffect } from "react";
import ShopNavigator from "./src/Navigation/ShopNavigator";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

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
  return <ShopNavigator />;
}

export default App;
