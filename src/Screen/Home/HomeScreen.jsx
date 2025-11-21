import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../Home/HomeScreenStyles";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen({ navigation }) {
  const [pressed, setPressed] = useState(false);
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [pressed3, setPressed3] = useState(false);
  const [pressed4, setPressed4] = useState(false);

  const delay = 200; // mejor UX que 2000ms

  return (
    <ScrollView>
      <LinearGradient
        colors={["#3A2C22", "#5A4636", "#8B6E4C"]}
        style={styles.container}
      >
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Categories</Text>
        </View>

        {/* Coffee */}
        <TouchableOpacity
          onPress={() => {
            setPressed(true);
            setTimeout(() => {
              navigation.push("Coffee");
              setPressed(false);
            }, delay);
          }}
        >
          <View style={styles.card}>
            <ImageBackground
              source={require("../../../assets/coffe.jpg")}
              style={styles.imageBack}
            >
              {pressed && (
                <View style={styles.overlayPressed}>
                  <Text style={styles.text}>Coffee</Text>
                </View>
              )}
            </ImageBackground>
          </View>
        </TouchableOpacity>

        {/* Cookies */}
        <TouchableOpacity
          onPress={() => {
            setPressed1(true);
            setTimeout(() => {
              navigation.push("Cookies");
              setPressed1(false);
            }, delay);
          }}
        >
          <View style={styles.card}>
            <ImageBackground
              source={require("../../../assets/cookies.webp")}
              style={styles.imageBack}
            >
              {pressed1 && (
                <View style={styles.overlayPressed}>
                  <Text style={styles.text}>Cookies</Text>
                </View>
              )}
            </ImageBackground>
          </View>
        </TouchableOpacity>

        {/* Cupcakes */}
        <TouchableOpacity
          onPress={() => {
            setPressed2(true);
            setTimeout(() => {
              navigation.push("Cupcakes");
              setPressed2(false);
            }, delay);
          }}
        >
          <View style={styles.card}>
            <ImageBackground
              source={require("../../../assets/cupcake.webp")}
              style={styles.imageBack}
            >
              {pressed2 && (
                <View style={styles.overlayPressed}>
                  <Text style={styles.text}>Cupcakes</Text>
                </View>
              )}
            </ImageBackground>
          </View>
        </TouchableOpacity>

        {/* Blended */}
        <TouchableOpacity
          onPress={() => {
            setPressed3(true);
            setTimeout(() => {
              navigation.push("Blended");
              setPressed3(false);
            }, delay);
          }}
        >
          <View style={styles.card}>
            <ImageBackground
              source={require("../../../assets/blended.jpeg")}
              style={styles.imageBack}
            >
              {pressed3 && (
                <View style={styles.overlayPressed}>
                  <Text style={styles.text}>Blended</Text>
                </View>
              )}
            </ImageBackground>
          </View>
        </TouchableOpacity>

        {/* Toasted */}
        <TouchableOpacity
          onPress={() => {
            setPressed4(true);
            setTimeout(() => {
              navigation.push("Toasted");
              setPressed4(false);
            }, delay);
          }}
        >
          <View style={styles.card}>
            <ImageBackground
              source={require("../../../assets/toasted.webp")}
              style={styles.imageBack}
            >
              {pressed4 && (
                <View style={styles.overlayPressed}>
                  <Text style={styles.text}>Toasted</Text>
                </View>
              )}
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
}
