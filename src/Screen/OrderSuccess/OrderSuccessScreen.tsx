import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./OrderSuccessScreenStyles";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function OrderSuccessScreen({ route, navigation }) {
  const { orderData } = route.params;
  const { clearCart } = useContext(CartContext);

  const iconScale = useRef(new Animated.Value(0)).current;
  const ticketOpacity = useRef(new Animated.Value(0)).current;
  const buttonTranslate = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(iconScale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
      Animated.timing(ticketOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(buttonTranslate, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="close" size={28} color="#333" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.inner}>
        <Animated.View
          style={[styles.iconWrapper, { transform: [{ scale: iconScale }] }]}
        >
          <Ionicons name="checkmark-circle" size={90} color="#8B6E4C" />
        </Animated.View>

        <Text style={styles.title}>¡Pedido Confirmado!</Text>
        <Text style={styles.subtitle}>
          Tu compra se ha registrado correctamente
        </Text>

        <Animated.View style={[styles.ticket, { opacity: ticketOpacity }]}>
          <View style={styles.section}>
            <View style={styles.row}>
              <Text style={styles.label}>Hora:</Text>
              <Text style={styles.value}>{orderData.timestamp}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Items:</Text>
              <Text style={styles.value}>{orderData.items.length}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Total:</Text>
              <Text style={styles.total}>${orderData.total.toFixed(2)}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.row}>
              <Text style={styles.label}>Nombre:</Text>
              <Text style={styles.value}>{orderData.name}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Teléfono:</Text>
              <Text style={styles.value}>{orderData.phone}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Dirección:</Text>
              <Text style={styles.value}>{orderData.address}</Text>
            </View>

            {orderData.corner ? (
              <View style={styles.row}>
                <Text style={styles.label}>Esquina:</Text>
                <Text style={styles.value}>{orderData.corner}</Text>
              </View>
            ) : null}
          </View>

          <View style={styles.itemsList}>
            {orderData.items.map((item) => (
              <View key={item.id} style={styles.row}>
                <Text style={styles.value}>
                  {item.title} x{item.quantity}
                </Text>
                <Text style={styles.totalMini}>
                  ${(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            ))}
          </View>

          {orderData.observations ? (
            <View style={styles.obsBox}>
              <Text style={styles.label}>Observaciones:</Text>
              <Text style={styles.observations}>{orderData.observations}</Text>
            </View>
          ) : null}
        </Animated.View>

        <Animated.View
          style={{
            width: "100%",
            transform: [{ translateY: buttonTranslate }],
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              clearCart();
              navigation.navigate("Home");
            }}
          >
            <Ionicons name="home" size={20} color="#fff" />
            <Text style={styles.buttonText}>Volver al Inicio</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </View>
  );
}
