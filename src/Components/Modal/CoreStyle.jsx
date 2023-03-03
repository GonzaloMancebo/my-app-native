import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // opcional para establecer un fondo semitransparente
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 70,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  cartCount:{
    textAlign: "center",
    justifyContent: "center",

  }
});
