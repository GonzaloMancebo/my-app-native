import React, { useState } from "react";
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { styles } from "../Modal/CoreStyle";
import { AntDesign } from "react-native-vector-icons";

const CoreModal = ({ modal, title, image, setModal, selectProduct, onCloseModal }) => {
  const [showProductDetailModal, setShowProductDetailModal] = useState(false);

  const handleShowProductDetail = () => {
    console.log("show product detail modal");
    setShowProductDetailModal(true);
  };

  const handleFinishOrder = () => {
    console.log("finish order");
    setShowProductDetailModal(false);
  };

  const handleAddMoreProducts = () => {
    console.log("add more products");
    setShowProductDetailModal(false);
    setModal(false);
  };

  const handleClose = () => {
    setModal(false);
    onCloseModal();
    console.log("close modal");
  };

  return (
    <>
      <Modal transparent visible={modal} animationType="slide">
        <TouchableWithoutFeedback
          style={styles.viewmodal}
          onPress={handleClose}
        >
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.touch}
              onPress={handleShowProductDetail}
            >
              <Text style={styles.cartCount}>{selectProduct.count}</Text>
              <AntDesign name="shoppingcart" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
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
                <Text style={styles.productCount}>Count: {selectProduct.count}</Text>
                <Text style={styles.productCount}>Price: $ {selectProduct.price} </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.productCount}>Total: $ {selectProduct.price}</Text>
        <View style  ={styles.btn}>
        <Button style={styles.addToCartButton} onPress={handleFinishOrder} title= "Finish Order"  color={"red"}>
        </Button>
        <Button style={styles.addMoreButton} onPress={handleAddMoreProducts} title = "Add More Products">
        </Button>
        </View>
      </Modal>
    </>
  );
};

export default CoreModal;
