import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 12,
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  info: {
    flex: 1,
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  ingredients: {
    color: "grey",
    fontSize: 15,
    marginTop: 10,
  },
  price: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 30,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 15,
    color: "black",
  },

  image: {
  width: 150,
  height: 160,
  borderRadius: 12,
  overflow: "hidden",
  justifyContent: "flex-end",
  padding: 10,
},

addButton: {
  position: "absolute",
  bottom: 10,
  right: 10,
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: "white",
  justifyContent: "center",
  alignItems: "center",
  shadowColor: "#000",
  shadowOpacity: 0.15,
  shadowRadius: 6,
  elevation: 4,
},

addButtonText: {
  fontSize: 26,
  color: "black",
  marginTop: -2, 
},

});
