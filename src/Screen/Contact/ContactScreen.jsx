import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { styles } from "./ContactStyles";
import ModalDropdown from "react-native-modal-dropdown";
import * as MailComposer from "expo-mail-composer";
import { Alert } from "react-native";

const ContactScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSendEmail = () => {
    MailComposer.composeAsync({
      recipients: [email],
      subject: subject,
      body: body,
    })
      .then((result) => {
        if (result.status === "sent") {
          Alert.alert("Success", "Your message has been sent successfully!", [
            { text: "OK" },
          ]);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Full name"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={(text) => setEmail(text)}
      />
      <View>
        <TouchableOpacity>
          <ModalDropdown
            style={styles.dropdown}
            dropdownStyle={styles.dropdownStyle}
            options={["Suggestion", "Complaint", "Other"]}
            defaultValue="Select a contact reason  ↓"
            onSelect={(index, value) => setSubject(value)}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        style={[styles.input, styles.messageInput]}
        multiline
        placeholder="Message"
        onChangeText={(text) => setBody(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome name="search" size={20} color="#3b5998" />
            <Text style={{ marginLeft: 5 }}>Donde estamos??</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.footer}>Nuestras Redes!</Text>
        <View style={styles.social}>
          <TouchableOpacity style={styles.socialIcon}>
            <FontAwesome name="facebook" size={30} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <FontAwesome name="twitter" size={30} color="#1da1f2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <FontAwesome name="instagram" size={30} color="#e1306c" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <AntDesign name="github" size={30} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContactScreen;
