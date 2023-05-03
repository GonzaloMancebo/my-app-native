import { StyleSheet } from "react-native";
import Constants from "expo-constants";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: Constants.statusBarHeight,
    color: "white",
    fontWeight: "bold",
  },

  imageBack: {
    backgroundColor: "transparent",
    flex: 1,
  },

  count: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});