import { useEffect } from "react";
import ShopNavigator from "./src/Navigation/ShopNavigator";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";
import { uploadAllData } from "./src/FirestoreUpload";

// IMPORTANTE: importá la función

function App() {
  const [loaded] = useFonts({
    RobotoItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
    RobotoItalicBold: require("./assets/fonts/Roboto-BoldItalic.ttf"),
  });

  // ⭐ Hook 1
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.preventAutoHideAsync();
      if (loaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [loaded]);

/*   useEffect(() => {
    if (loaded) {
      
    }
  }, [loaded]); */

  if (!loaded) return null;

  return (
    <>
      <ShopNavigator />
      <Toast />
    </>
  );
}

export default App;
