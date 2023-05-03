import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ButtonStyle";

const ButtonAdd = ({ title, onPress }) => {
  const [buttonColor, setButtonColor] = useState("#000000");
  const [buttonTitle, setButtonTitle] = useState(title);

  const handlePress = () => {
    setButtonColor("#8fbc8f");
    setButtonTitle("✓ Aggregate");
    onPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.btn, { backgroundColor: buttonColor }]}
    >
      <Text style={styles.title}>{buttonTitle} </Text>
    </TouchableOpacity>
  );
};

export default ButtonAdd;
