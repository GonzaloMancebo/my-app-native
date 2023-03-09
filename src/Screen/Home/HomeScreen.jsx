import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {styles} from "../Home/HomeScreenStyles"

const imageback1 = {
  uri: "data:image/jpeg;base64,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",
};

const imageback2 = {
  uri: "https://truffle-assets.imgix.net/0c30c2d7-0cb86d72-alfajor-de-cookies_1920x1080-thumbnail.jpg",
};

const imageback3 = {
  uri: "https://www.clarin.com/img/2021/04/29/9lAb2baoa_1200x630__1.jpg",
};

const imageback4 = {
  uri: "data:image/jpeg;base64,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",
};

const imageback5 = {
  uri: "https://previews.123rf.com/images/bondsza/bondsza1610/bondsza161000065/65050050-sabroso-queso-derretido-y-jam%C3%B3n-emparedados-apilados-en-un-plato-blanco.jpg",
};

function HomeScreen({ navigation }) {
  const [pressed, setPressed] = useState(false);
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [pressed3, setPressed3] = useState(false);
  const [pressed4, setPressed4] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity
          onPress={() => {
            setPressed(true);

            setTimeout(() => {
              navigation.push("Coffe");

              setTimeout(() => {
                setPressed(false);
              }, 200);
            }, 2000);
          }}
        >
          <View style={styles.card}>
            <ImageBackground
              source={imageback1}
              style={styles.imageBack}
              resizeMode={"cover"}
            >
              <View
                style={[
                  styles.textContainer,
                  pressed && styles.textContainerPressed,
                ]}
              >
                <Text style={styles.text}>{pressed ? "Coffe" : null}</Text>
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
              source={imageback2}
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
              source={imageback3}
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
              source={imageback4}
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
              source={imageback5}
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
