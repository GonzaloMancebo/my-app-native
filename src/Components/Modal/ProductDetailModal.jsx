import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./ProductDetailModalStyles";
import { CartContext } from "../../Context/CartContext";

export default function ProductDetailModal({
  visible,
  product,
  onClose,
    onAddToCart,   

}) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (visible) setQuantity(1);
  }, [visible]);

const handleAdd = () => {
  addToCart(product, quantity);      
  onAddToCart && onAddToCart();      
  onClose();                       
};

  if (!product) return null;

  return (
    <Modal visible={visible} transparent animationType="slide" statusBarTranslucent>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.modalContainer} onPress={(e) => e.stopPropagation()}>
          
          <View style={styles.header}>
            <Text style={styles.title}>{product.title}</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={26} color="#333" />
            </TouchableOpacity>
          </View>

          <View style={styles.imagePlaceholder}>
            {product.image ? (
              <Image source={{ uri: product.image }} style={styles.image} />
            ) : (
              <Text style={{ opacity: 0.6 }}>Sin imagen</Text>
            )}
          </View>

          <View style={{ marginTop: 8 }}>
            <Text style={styles.category}>{product.category || ""}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.rating}>Calificación: ⭐ {product.rating || "4.8"}</Text>
          </View>

          <View style={styles.quantityBox}>
            <Text style={styles.quantityLabel}>Cantidad</Text>

            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Ionicons name="remove" size={18} color="#333" />
              </TouchableOpacity>

              <Text style={styles.quantityValue}>{quantity}</Text>

              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => setQuantity(quantity + 1)}
              >
                <Ionicons name="add" size={18} color="#333" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <Text style={styles.addButtonText}>
              Agregar al Carrito - ${(product.price * quantity).toFixed(2)}
            </Text>
          </TouchableOpacity>

        </Pressable>
      </Pressable>
    </Modal>
  );
}
