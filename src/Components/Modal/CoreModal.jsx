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

const CoreModal = ({ modal, count, title, price, image, handleCloseModal }) => {
  const [showProductDetailModal, setShowProductDetailModal] = useState(false);

  const handleShowProductDetail = () => {
    setShowProductDetailModal(true);
  };

  const handleFinishOrder = () => {
    handleCloseModal();
    setShowProductDetailModal(false);
  };

  const handleAddMoreProducts = () => {
    setShowProductDetailModal(false);
  };

  return (
    <>
      <Modal transparent visible={modal} animationType="slide" style ={styles.hola}>
        <View style={styles.viewmodal}>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.touch}
              onPress={handleShowProductDetail}
            >
              <Text style={styles.cartCount}>{count}</Text>
              <AntDesign name="shoppingcart" size={24} color="black" />
            </TouchableOpacity>
          </View>
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
              onPress={handleAddMoreProducts}
            ></Button>
            <View></View>
            <Button
              title="    Finish order"
              color={"red"}
              style={styles.finish}
              onPress={handleFinishOrder}
            ></Button>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default CoreModal;
