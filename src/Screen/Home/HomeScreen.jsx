import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./HomeScreenStyles";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <LinearGradient colors={["#8C4A0E", "#B2793C"]} style={styles.hero}>
        <Text style={styles.heroTitle}>Coffe Shop</Text>
        <Text style={styles.heroSubtitle}>Tus bebidas y snacks favoritos</Text>

        <View style={styles.promoBadge}>
          <Text style={styles.promoBadgeText}>20% en primer pedido</Text>
        </View>
      </LinearGradient>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Novedades</Text>

        <View style={styles.cardList}>
          <LinearGradient
            colors={["#f97316", "#f59e0b"]}
            style={styles.newsCard}
          >
            <Text style={styles.newsTitle}>Espresso Especial</Text>
            <Text style={styles.newsDesc}>Café premium recién tostado</Text>
          </LinearGradient>

          <LinearGradient
            colors={["#fb7185", "#ec4899"]}
            style={styles.newsCard}
          >
            <Text style={styles.newsTitle}>Croissant Artesanal</Text>
            <Text style={styles.newsDesc}>Receta francesa tradicional</Text>
          </LinearGradient>

          <LinearGradient
            colors={["#fcd34d", "#fde68a"]}
            style={[styles.newsCard, { color: "#78350f" }]}
          >
            <Text style={[styles.newsTitle, { color: "#78350f" }]}>
              Cheesecake Casero
            </Text>
            <Text style={[styles.newsDesc, { color: "#78350f" }]}>
              Nuevo sabor: frambuesa
            </Text>
          </LinearGradient>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.ctaCard}>
          <Text style={styles.ctaText}>¿Qué deseas hoy?</Text>

          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => navigation.navigate("Products")}
          >
            <Text style={styles.ctaButtonText}>Ver Productos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
