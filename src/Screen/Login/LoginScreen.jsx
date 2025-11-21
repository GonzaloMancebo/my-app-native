import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../Login/LoginScreenStyle";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../../Firebase/config";
import Toast from "react-native-toast-message";
import { LinearGradient } from "expo-linear-gradient";

function LoginScreen({ navigation }) {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [name, setName] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [isFocusedEmailLogin, setIsFocusedEmailLogin] = useState(false);
  const [isFocusedPasswordLogin, setIsFocusedPasswordLogin] = useState(false);
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmailRegister, setIsFocusedEmailRegister] = useState(false);
  const [isFocusedPasswordRegister, setIsFocusedPasswordRegister] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
      .then(() => {
        setEmailLogin("");
        setPasswordLogin("");

        Toast.show({
          type: "success",
          text1: "Login exitoso!",
        });

        setTimeout(() => {
          setIsLoading(false);
          navigation.navigate("Home");
        }, 1500);
      })
      .catch((error) => {
        setIsLoading(false);
        Toast.show({
          type: "error",
          text1: "Error al iniciar sesión",
          text2: error.message,
        });
      });
  };

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, emailRegister, passwordRegister)
      .then(() => {
        setName("");
        setEmailRegister("");
        setPasswordRegister("");

        Toast.show({
          type: "success",
          text1: "Usuario creado!",
          text2: "Ya podés iniciar sesión",
        });

        setIsLogin(true); // Cambia automáticamente al login
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: "Error al crear usuario",
          text2: error.message,
        });
      });
  };

  const resetFocusStates = () => {
    setIsFocusedEmailLogin(false);
    setIsFocusedPasswordLogin(false);
    setIsFocusedName(false);
    setIsFocusedEmailRegister(false);
    setIsFocusedPasswordRegister(false);
  };

  return (
    <LinearGradient
      colors={["#3A2C22", "#5A4636", "#8B6E4C"]}
      style={styles.container}
    >
      <View style={styles.card}>
        <View style={styles.containerImage}>
          <Image
            source={require("../../../assets/logo2-01.png")}
            style={styles.logo}
          />
        </View>

        {isLogin && (
          <>
            <TextInput
              style={[
                styles.input,
                isFocusedEmailLogin ? styles.focusedInput : null,
              ]}
              placeholder="Correo"
              placeholderTextColor="gray"
              keyboardType="email-address"
              onChangeText={setEmailLogin}
              value={emailLogin}
              onFocus={() => setIsFocusedEmailLogin(true)}
              onBlur={() => setIsFocusedEmailLogin(false)}
            />

            <TextInput
              style={[
                styles.input,
                isFocusedPasswordLogin ? styles.focusedInputPassword : null,
              ]}
              placeholder="Contraseña"
              placeholderTextColor="gray"
              secureTextEntry={true}
              onChangeText={setPasswordLogin}
              value={passwordLogin}
              onFocus={() => setIsFocusedPasswordLogin(true)}
              onBlur={() => setIsFocusedPasswordLogin(false)}
            />
          </>
        )}

        {!isLogin && (
          <>
            <TextInput
              style={[styles.input, isFocusedName ? styles.focusedInput : null]}
              placeholder="Nombre"
              placeholderTextColor="gray"
              value={name}
              onChangeText={setName}
              onFocus={() => setIsFocusedName(true)}
              onBlur={() => setIsFocusedName(false)}
            />

            <TextInput
              style={[
                styles.input,
                isFocusedEmailRegister ? styles.focusedInput : null,
              ]}
              placeholder="Correo"
              placeholderTextColor="gray"
              keyboardType="email-address"
              value={emailRegister}
              onChangeText={setEmailRegister}
              onFocus={() => setIsFocusedEmailRegister(true)}
              onBlur={() => setIsFocusedEmailRegister(false)}
            />

            <TextInput
              style={[
                styles.input,
                isFocusedPasswordRegister ? styles.focusedInputPassword : null,
              ]}
              placeholder="Contraseña"
              placeholderTextColor="gray"
              secureTextEntry={true}
              value={passwordRegister}
              onChangeText={setPasswordRegister}
              onFocus={() => setIsFocusedPasswordRegister(true)}
              onBlur={() => setIsFocusedPasswordRegister(false)}
            />
          </>
        )}

        <Pressable
          onPress={() => (isLogin ? handleLogin() : handleCreateAccount())}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          disabled={isLoading}
        >
          <LinearGradient
            colors={
              pressed
                ? ["#0F0A07", "#2A201B", "#4C3A2F"]
                : ["#1A1410", "#3A2C22", "#5A4636"]
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.loginButton}
          >
            
            {isLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="white" />
                <Text style={styles.loadingText}>Loading...</Text>
              </View>
            ) : (
              <Text style={styles.loginText}>
                {isLogin ? "Ingresar" : "Crear cuenta"}
              </Text>
            )}
          </LinearGradient>
        </Pressable>

        <View style={styles.buttonContainer}>
          {isLogin ? (
            <TouchableOpacity
              onPress={() => {
                setIsLogin(false);
                setEmailLogin("");
                setPasswordLogin("");
                resetFocusStates();
              }}
            >
              <Text style={styles.buttonText}>
                ¿No tenés cuenta? Registrate!
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setIsLogin(true);
                setEmailRegister("");
                setPasswordRegister("");
                setName("");
                resetFocusStates();
              }}
            >
              <Text style={styles.buttonText}>¿Ya tenés cuenta? Ingresá</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </LinearGradient>
  );
}

export default LoginScreen;
