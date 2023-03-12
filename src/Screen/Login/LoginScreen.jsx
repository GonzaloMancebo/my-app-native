import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../Login/LoginScreenStyle";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedPassword, setIsFocusedPassaword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    Alert.alert(
      "Bienvenido",
      "¡Hola Ger! Antes de comenzar, debes iniciar sesión. Recorda el email incluye un @ y la contraseña mas de 6 caracteres",
      [
        {
          text: "OK",
        },
      ]
    );
  }, []);

  const handleLogin = () => {
    if (!email.includes("@")) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        "Invalid Password",
        "Password must be at least 6 characters long."
      );
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigation.push("Home");
      setEmail("");
      setPassword("");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator style={styles.loadingIndicator} size={"large"} color ={"white"} />
      ) : (
        <View style={styles.card}>
          <Image
            source={require("../../../assets/logo2-01.png")}
            style={styles.logo}
          />
          <TextInput
            style={[styles.input, isFocused ? styles.focusedInput : null]}
            placeholder="Email/User"
            placeholderTextColor="black"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            value={email}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <TextInput
            style={[
              styles.input,
              isFocusedPassword ? styles.focusedInputPassword : null,
            ]}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
            onFocus={() => setIsFocusedPassaword(true)}
            onBlur={() => setIsFocusedPassaword(false)}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text style={styles.loginText}>Send</Text>
          </TouchableOpacity>
          
        </View>
      )}
    </View>
  );
}

export default LoginScreen;
