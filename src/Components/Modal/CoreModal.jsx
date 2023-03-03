import React from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import { styles } from "./CoreStyle";
import { AntDesign } from "react-native-vector-icons";
import BottomSheet from 'react-native-simple-bottom-sheet';
import { ScrollView } from "react-native-gesture-handler";

const CoreModal = ({ modal, count }) => {
  return (
    <Modal visible={modal}>
      <View style={styles.modalContainer}>
        <BottomSheet isOpen>
          <View style={styles.card}>
            <ScrollView>
              <TouchableOpacity>
              <Text style={styles.cartCount}>{count}</Text>

                <AntDesign name="shoppingcart" size={24} color="black" />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </BottomSheet>
      </View>
    </Modal>
  );
};

export default CoreModal;

