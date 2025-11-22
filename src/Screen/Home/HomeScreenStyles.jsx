import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  hero: {
    padding: 20,
    paddingTop: 30,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  heroSubtitle: {
    color: "rgba(255,255,255,0.9)",
    marginVertical: 6,
  },
  promoBadge: {
    backgroundColor: "#fbbf24",
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    borderRadius: 10,
    marginTop: 6,
  },
  promoBadgeText: {
    color: "#7c2d12",
    fontWeight: "bold",
    fontSize: 13,
  },

  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 12,
  },

  cardList: {
    gap: 12,
  },

  /* NEWS CARDS */
  newsCard: {
    borderRadius: 12,
    padding: 14,
  },
  newsTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 2,
    color: "#fff",
  },
  newsDesc: {
    fontSize: 12,
    opacity: 0.9,
    color: "#fff",
  },

  ctaCard: {
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 20,
    borderRadius: 14,
    alignItems: "center",
  },
  ctaText: {
    fontSize: 14,
    marginBottom: 12,
    color: "#666",
  },
  ctaButton: {
    backgroundColor: "#8B6E4C",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 10,
  },
  ctaButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
