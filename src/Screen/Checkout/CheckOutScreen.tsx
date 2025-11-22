import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./CheckOutScreenStyles";

export default function CheckoutScreen({ route, navigation }) {
  const { cart} = route.params;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    corner: "",
    observations: "",
  });

  const [errors, setErrors] = useState([]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const validateForm = () => {
    const newErrors = [];
    if (!formData.name.trim()) newErrors.push("El nombre es requerido");
    if (!formData.phone.trim()) newErrors.push("El teléfono es requerido");
    if (!formData.address.trim()) newErrors.push("La dirección es requerida");
    setErrors(newErrors);
    return newErrors.length === 0;
  };

const handleConfirm = () => {
  if (validateForm()) {
    navigation.navigate("OrderSuccess", {
      orderData: {
        ...formData,
        items: cart,
        total,
        timestamp: new Date().toLocaleTimeString("es-AR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    });
  }
};



  



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={26} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Confirmar Pedido</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.ticket}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PRODUCTOS</Text>

            {cart.map((item) => (
              <View key={item.id} style={styles.itemRow}>
                <Text style={styles.itemName}>
                  {item.quantity}x {item.title}
                </Text>
                <Text style={styles.itemPrice}>
                  ${(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>TOTAL</Text>
              <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
            </View>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>NOMBRE</Text>
            <TextInput
              style={styles.input}
              placeholder="Tu nombre"
              value={formData.name}
              onChangeText={(v) => handleChange("name", v)}
            />

            <Text style={styles.label}>TELÉFONO</Text>
            <TextInput
              style={styles.input}
              placeholder="+54 11 XXXX-XXXX"
              keyboardType="phone-pad"
              value={formData.phone}
              onChangeText={(v) => handleChange("phone", v)}
            />

            <Text style={styles.label}>DIRECCIÓN</Text>
            <TextInput
              style={styles.input}
              placeholder="Calle y número"
              value={formData.address}
              onChangeText={(v) => handleChange("address", v)}
            />

            <Text style={styles.label}>ESQUINA (opcional)</Text>
            <TextInput
              style={styles.input}
              placeholder="Esquina de referencia"
              value={formData.corner}
              onChangeText={(v) => handleChange("corner", v)}
            />

            <Text style={styles.label}>OBSERVACIONES (opcional)</Text>
            <TextInput
              style={[styles.input, { height: 80 }]}
              placeholder="Indicaciones especiales..."
              multiline
              value={formData.observations}
              onChangeText={(v) => handleChange("observations", v)}
            />
          </View>
        </View>

        {errors.length > 0 && (
          <View style={styles.errorBox}>
            {errors.map((err, idx) => (
              <Text key={idx} style={styles.errorText}>
                ⚠ {err}
              </Text>
            ))}
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.cancelBtn}
        >
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleConfirm} style={styles.confirmBtn}>
          <Text style={styles.confirmText}>Confirmar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
