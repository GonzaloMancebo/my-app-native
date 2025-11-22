import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf7f2",
  },

  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 20,
    elevation: 3,
  },

  inner: {
    paddingTop: 80,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  iconWrapper: {
    marginBottom: 20,
  },

  icon: {
    transform: [{ scale: 1 }],
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
  },

  ticket: {
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#e6e2da",
    borderStyle: "dashed",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },

  section: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e2da",
    borderStyle: "dashed",
    paddingBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },

  label: {
    fontSize: 12,
    color: "#666",
  },

  value: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
  },

  total: {
    fontSize: 16,
    fontWeight: "900",
    color: "#8B6E4C",
  },

  totalMini: {
    fontSize: 12,
    fontWeight: "700",
    color: "#8B6E4C",
  },

  itemsList: {
    paddingBottom: 10,
  },

  obsBox: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#e6e2da",
    borderStyle: "dashed",
    paddingTop: 10,
  },

  observations: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#444",
  },

  button: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#8B6E4C",
    paddingVertical: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 40,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
});
