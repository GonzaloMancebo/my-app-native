import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },

  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "70%",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  itemText: {
    fontSize: 16,
  },

  price: {
    fontSize: 16,
    fontWeight: "600",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingVertical: 10,
  },

  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },

  checkoutButton: {
    backgroundColor: "#8B6E4C",
    marginTop: 10,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  checkoutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
