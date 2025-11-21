import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "./ProductCardStyles";

const ProductCard = ({ title, image, price, ingredients }) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        imageStyle={{ borderRadius: 12 }}
      >
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>

        <Text numberOfLines={2} style={styles.ingredients}>
          {ingredients}
        </Text>

        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
};

export default ProductCard;
