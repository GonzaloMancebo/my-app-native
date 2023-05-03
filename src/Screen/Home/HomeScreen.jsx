import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,

} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../Home/HomeScreenStyles";

function HomeScreen({ navigation }) {
  const [pressed, setPressed] = useState(false);
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [pressed3, setPressed3] = useState(false);
  const [pressed4, setPressed4] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Categories</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            setPressed(true);
            setTimeout(() => {
              navigation.push("Coffee");
              setTimeout(() => {
                setPressed(false);
              }, 200);
            }, 2000);
          }}
        >
      
          <View style={styles.card}>
            <ImageBackground
              source={require("../../../assets/coffe.jpg")}
              style={styles.imageBack}
              resizeMode={"cover"}
            >
              <View
                style={[
                  styles.textContainer,
                  pressed && styles.textContainerPressed,
                ]}
              >
                <Text style={styles.text}>{pressed ? "Coffee" : null}</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setPressed1(true);

            setTimeout(() => {
              navigation.push("Cookies");

              setTimeout(() => {
                setPressed1(false);
              }, 200);
            }, 2000);
          }}
        >
          <View style={styles.card}>
            <ImageBackground
              source={require("../../../assets/cookies.webp")}
              style={styles.imageBack}
              resizeMode={"cover"}
            >
              <View
                style={[
                  styles.textContainer,
                  pressed1 && styles.textContainerPressed1,
                ]}
              >
                <Text style={styles.text}>{pressed1 ? "Cookies" : null}</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setPressed2(true);

            setTimeout(() => {
              navigation.push("Cupcakes");

              setTimeout(() => {
                setPressed2(false);
              }, 200);
            }, 2000);
          }}
        >
          <View style={styles.card}>
            <ImageBackground
              source={require("../../../assets/cupcake.webp")}
              style={styles.imageBack}
              resizeMode={"cover"}
            >
              <View
                style={[
                  styles.textContainer,
                  pressed2 && styles.textContainerPressed2,
                ]}
              >
                <Text style={styles.text}>{pressed2 ? "Cupcakes" : null}</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setPressed3(true);

            setTimeout(() => {
              navigation.push("Blended");

              setTimeout(() => {
                setPressed3(false);
              }, 200);
            }, 2000);
          }}
        >
          <View style={styles.card}>
            <ImageBackground
              source={require("../../../assets/blended.jpeg")}
              style={styles.imageBack}
              resizeMode={"cover"}
            >
              <View
                style={[
                  styles.textContainer,
                  pressed3 && styles.textContainerPressed3,
                ]}
              >
                <Text style={styles.text}>{pressed3 ? "Blended" : null}</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setPressed4(true);

            setTimeout(() => {
              navigation.push("Toasted");

              setTimeout(() => {
                setPressed4(false);
              }, 200);
            }, 2000);
          }}
        >
          <View style={styles.card}>
            <ImageBackground
              source={require("../../../assets/toasted.webp")}
              style={styles.imageBack}
              resizeMode={"cover"}
            >
              <View
                style={[
                  styles.textContainer,
                  pressed4 && styles.textContainerPressed4,
                ]}
              >
                <Text style={styles.text}>{pressed4 ? "Toasted" : null}</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
