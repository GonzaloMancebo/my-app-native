import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "flex-end",
  },

  modalContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "90%",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
  },

  imagePlaceholder: {
    height: 160,
    backgroundColor: "#ddd",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },

  category: {
    color: "#666",
    fontSize: 14,
  },

  price: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 4,
    color: "#8B6E4C",
  },

  rating: {
    marginTop: 4,
    fontSize: 12,
    color: "#777",
  },

  quantityBox: {
    marginTop: 16,
    padding: 12,
    backgroundColor: "#eee",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  quantityLabel: {
    fontSize: 16,
    fontWeight: "600",
  },

  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  qtyButton: {
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  quantityValue: {
    width: 30,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },

  addButton: {
    backgroundColor: "#8B6E4C",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 20,
  },

  addButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
