import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../Button/ButtonStyle";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.title}> {title} </Text>
    </TouchableOpacity>
  );
};

export default Button;
