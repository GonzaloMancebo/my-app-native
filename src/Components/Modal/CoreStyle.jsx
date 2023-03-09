import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  touch: {
    height: 80,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  cartCount: {
    textAlign: "center",
    justifyContent: "center",
  },
  cardContainer: {
    borderStyle: "solid",
    backgroundColor: "rgba(244, 232, 238, 0.8)",
    borderRadius: 30,
  },

  Container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 10,
    justifyContent: "center",
  },

  firstColumn: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginRight: 10,
    width: "40%",
    height: 150,
    marginVertical: 30,
  },

  productName: {
    fontWeight: "bold",
    fontSize: 16,
    justifyContent: "center",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  column: {
    marginVertical: 50,
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    width: "55%",
    height: 150,
  },

  row: {
    flexDirection: "column",
    height: 70,
    textAlign: "center",
    justifyContent: "center",
  },

  productCount: {
    fontSize: 15,
    justifyContent: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  emoji: {
    marginLeft: 350,
    marginBottom: 10,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },

  viewmodal: {
    flex: 1,
    justifyContent: "center",
  },

  card: {
    backgroundColor: "red",
    alignItems: "center",
    borderRadius: 200,
    marginTop: 630

  },
});
