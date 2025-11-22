import { useEffect, useState } from "react";
import Navigator from "./src/Navigation/Navigator";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";
import { uploadAllData } from "./src/FirestoreUpload";
import { CartProvider } from "./src/Context/CartContext";
import CartModal from "./src/Components/Modal/CartModal";

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

  /*   useEffect(() => {
    if (loaded) {
      
    }
  }, [loaded]); */
  const [cartModalVisible, setCartModalVisible] = useState(false);

  if (!loaded) return null;

  return (
    <CartProvider>
      <Navigator openCartModal={() => setCartModalVisible(true)} />

      <CartModal
        visible={cartModalVisible}
        onClose={() => setCartModalVisible(false)}
      />

      <Toast />
    </CartProvider>
  );
}

export default App;
