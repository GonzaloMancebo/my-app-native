import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: "center",


  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    justifyContent: "center",
    textAlign: "center",
    color: "white"

  },
  ingredients: {
    justifyContent: "center",
    textAlign: "center",
    color: "white"

  },

  text: {
    fontWeight: "bold",
    textAlign: "auto",
    marginLeft: 10,
    color: "white"

  },
  textCount: {
    color: "white"

  },

  textDetail: {
    fontSize: 15,
    justifyContent: "center",
    textAlignVertical: "center",
    color: "white"
  },

  emoji: {
    flexDirection: "row",
    marginRight: 100,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
    height: 150,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },

  picture: {
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    resizeMode: "cover",
    flex: 1,
  },

  column: {
    marginVertical: 50,
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "60%",
    height: 150,
  },

  firstColumn: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginRight: 10,
    width: "40%",
    height: 150,
    marginVertical: 30,
  },
  button: {
    marginLeft: 90,
    marginTop: -42,
  },
  card: {
    marginTop: 10,
    borderStyle: "solid",
    paddingBottom: 10,
    borderRadius: 30,
    backgroundColor: "rgba(20, 21, 21, 0.87)",

  },
});
