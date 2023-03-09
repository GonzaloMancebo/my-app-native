import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: "100%",
    padding: 10,
  },
  firstColumn: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 150,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  emoji: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});
