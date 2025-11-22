import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginTop: 30
  },
  backButton: {
    padding: 4,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  content: {
    flex: 1,
    padding: 16,
  },
  ticket: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },

  section: {
    marginBottom: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ddd",
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#666",
    marginBottom: 8,
  },

  /* ITEMS */
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  itemName: {
    fontSize: 14,
    color: "#222",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8B6E4C",
  },

  /* TOTAL */
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#666",
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: "900",
    color: "#8B6E4C",
  },

  /* FORM */
  form: {
    marginTop: 12,
    gap: 12,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
  },
  input: {
    marginTop: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 14,
    color: "#222",
    backgroundColor: "#fafafa",
  },

  /* ERRORS */
  errorBox: {
    padding: 12,
    backgroundColor: "#ffe5e5",
    borderWidth: 1,
    borderColor: "#ffb3b3",
    borderRadius: 8,
    marginBottom: 20,
  },
  errorText: {
    color: "#cc0000",
    fontSize: 12,
    marginBottom: 4,
  },

  /* FOOTER */
  footer: {
    flexDirection: "row",
    padding: 14,
    borderTopWidth: 1,
    borderColor: "#eee",
    gap: 10,
  },
  cancelBtn: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    alignItems: "center",
  },
  cancelText: {
    fontSize: 15,
    fontWeight: "600",
  },
  confirmBtn: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: "#8B6E4C",
    borderRadius: 10,
    alignItems: "center",
  },
  confirmText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
  },
});
