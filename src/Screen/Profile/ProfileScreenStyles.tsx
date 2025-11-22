import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    backgroundColor: "#8B6E4C", 
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginTop: 20
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarEmoji: {
    fontSize: 26,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  email: {
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
    marginTop: 2,
  },

  menuContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    gap: 12,
    
  },
  menuItem: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  menuSubtitle: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
});
