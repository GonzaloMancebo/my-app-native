import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ButtonStyle";

const ButtonAdd = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.title}>{title} </Text>
    </TouchableOpacity>
  );
};

export default ButtonAdd;
