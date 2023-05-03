import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 20,
  },
  card: {
    width: 400,
    height: 170,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    borderRadius: 10,
  },
  imageBack: {
    flex: 1,
    width: "100%",
    height: 170,
  },
  imageProfile:{
    width: 100,
    height: 50,
    borderRadius: 25,

  },
  titlecontainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxWidth: 300,
    maxHeight: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalClose: {
    marginTop: 20,
    color: "#999",
    fontSize: 18,
    textAlign: "center",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  text: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 25,
    width: "100%",
  },
  textContainerPressed: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  textContainerPressed1: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  textContainerPressed2: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  textContainerPressed3: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  textContainerPressed4: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",

  },
});
