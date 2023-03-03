import React, { useState } from "react";
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { styles } from "./CoreStyle";
import { AntDesign } from "react-native-vector-icons";
import BottomSheet from "react-native-simple-bottom-sheet";
import { ScrollView } from "react-native-gesture-handler";

const CoreModal = ({ modal, count, title, price, image }) => {
  const [showProductDetailModal, setShowProductDetailModal] = useState(false);

  const handleShowProductDetail = () => {
    setShowProductDetailModal(true);
  };

  return (
    <>
      <Modal visible={modal} animationType="slide">
        <View style={styles.modalContainer}>
          <BottomSheet isOpen>
            <View style={styles.card}>
              <ScrollView>
                <TouchableOpacity
                  style={styles.touch}
                  onPress={handleShowProductDetail}
                >
                  <Text style={styles.cartCount}>{count}</Text>

                  <AntDesign name="shoppingcart" size={24} color="black" />
                </TouchableOpacity>
              </ScrollView>
            </View>
          </BottomSheet>
        </View>
      </Modal>

      <Modal visible={showProductDetailModal} animationType="slide">
        <Text>Purchase detail</Text>
        <TouchableOpacity
          style={styles.emoji}
          onPress={() => setShowProductDetailModal(false)}
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.cardContainer}>
          <View style={styles.Container}>
            <View style={styles.firstColumn}>
              <Text style={styles.productName}>{title}</Text>
              <Image style={styles.image} source={{ uri: image }} />
            </View>
            <View style={styles.column}>
              <View style={styles.row}>
                <Text style={styles.productCount}>Count: {count}</Text>
                <Text style={styles.productCount}>Price: $ {price}</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.productCount}>Total: $ {price}</Text>

        <TouchableOpacity style={styles.addToCartButton}>
          <View style={styles.btn}>
            <Button
              title="  Add more"
              style={styles.addmore}
              onPress={() => setShowProductDetailModal(false)}
            ></Button>
            <Button
              title="    Finish order"
              color={"red"}
              style={styles.finish}
            ></Button>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default CoreModal;
