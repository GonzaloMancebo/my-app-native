import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./ProfileScreenStyles";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <LinearGradient colors={["#8C4A0E", "#B2793C"]} style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarEmoji}>👤</Text>
          </View>
          <View>
            <Text style={styles.name}>Juan Pérez</Text>
            <Text style={styles.email}>juan@example.com</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTitle}>Mis Pedidos</Text>
          <Text style={styles.menuSubtitle}>Ver historial de compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTitle}>Direcciones</Text>
          <Text style={styles.menuSubtitle}>Administrar direcciones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTitle}>Métodos de Pago</Text>
          <Text style={styles.menuSubtitle}>Tarjetas y billeteras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTitle}>Ayuda</Text>
          <Text style={styles.menuSubtitle}>Centro de soporte</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
