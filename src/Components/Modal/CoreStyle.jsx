import { StyleSheet } from "react-native";

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

  column: {
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "60%",
    height: 150,
  },

  firstColumn: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    width: "40%",
    height: 150,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  emoji: {
    marginRight: 20,
  },
  card: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    borderStyle: "solid",
    paddingBottom: 10,
    height: 170,
  },

  delete: {
    height: 35,
    width: 35,
    marginLeft: 150,
    marginBottom: 80,
    justifyContent: "flex-end",
  },
  addcontainer: {
    flex: 1,
    flexDirection: "row",
  },
  finishproduct: {
    marginTop: 10,
    flex: 1,
  },
  addproduct: {
    marginTop: 10,
    flex: 1,
  },
  text: {
    height: 50,
    width: 130,
    marginTop: 60,
    fontWeight: "bold",
  },
  total: {
    fontWeight: "bold",
    marginTop: 10,
  },
});
