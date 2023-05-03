import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../Login/LoginScreenStyle";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../Firebase/Database";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedName, setIsFocusedName] =useState (false)
  const [isFocusedLastName, setIsFocusedLastName] =useState (false)
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setName("");
        setLastName("");
        setEmail("");
        setPassword("");
        ToastAndroid.showWithGravity(
          "User created successfully",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  const handleLogin = () => {
    setIsLoading(true);  
      signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setEmail("");
      setPassword("");
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        navigation.navigate("Home");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../../assets/logo2-01.png")}
          style={styles.logo}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setShowLogin(true);
              setShowRegister(false);
            }}
          >
            <Text
              style={showLogin ? styles.activeButtonText : styles.buttonText}
            >
              Log in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setShowLogin(false);
              setShowRegister(true);
            }}
          >
            <Text
              style={showRegister ? styles.activeButtonText : styles.buttonText}
            >
              Don't have a user? Sign up
            </Text>
          </TouchableOpacity>
        </View>

        {showLogin && (
          <TextInput
            style={[styles.input, isFocused ? styles.focusedInput : null]}
            placeholder="Email"
            placeholderTextColor="black"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            value={email}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        )}
        {showLogin && (
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
            onFocus={() => setIsFocusedPassword(true)}
            onBlur={() => setIsFocusedPassword(false)}
          />
        )}

        {showRegister && (
          <>
            <TextInput
              style={[styles.input, isFocusedName ? styles.focusedInput : null]}
              placeholder="Name"
              placeholderTextColor="black"
              value={name}
              onChangeText={(text) => setName(text)}
              onFocus={() => setIsFocusedName(true)}
              onBlur={() => setIsFocusedName(false)}
            />

            <TextInput
              style={[
                styles.input,
                isFocusedLastName ? styles.focusedInput : null,
              ]}
              placeholder="Last name"
              placeholderTextColor="black"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              onFocus={() => setIsFocusedLastName(true)}
              onBlur={() => setIsFocusedLastName(false)}
            />

            <TextInput
              style={[
                styles.input,
                isFocused ? styles.focusedInput : null,
              ]}
              placeholder="Email"
              placeholderTextColor="black"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
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
              onFocus={() => setIsFocusedPassword(true)}
              onBlur={() => setIsFocusedPassword(false)}

            />
          </>
        )}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => (showRegister ? handleCreateAccount() : handleLogin())}
          disabled={isLoading}
        >
          <View style={styles.loadingContainer}>
            {isLoading ? (
              <>
                <ActivityIndicator
                  style={styles.loadingIndicator}
                  size={"small"}
                  color={"white"}
                />
                <Text style={styles.loadingText}>Loading...</Text>
              </>
            ) : (
              <Text style={styles.loginText}>
                {showRegister ? "Create User" : "Log in"}
              </Text>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowRegister(!showRegister)}
          style={styles.registerButton}
        ></TouchableOpacity>
      </View>
    </View>
  );
}
export default LoginScreen;
