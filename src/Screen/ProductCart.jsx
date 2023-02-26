import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import ButtonAdd from "../Components/Button/ButtomAdd/ButtonAdd";
import CoreModal from "../Components/Modal/CoreModal";
import { styles } from "../Screen/CartStyles";

function ProductCart({ id, title, description, ingredients, image, price, addToCart }) {
  const [count, setCount] = useState(1);
  const [modal, setModal] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const onHandleAdd = (id) => {
    setSelectProduct(id);
    setModal(!modal);
  };

  const onDeleteProduct = (productId) => {
    const newCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(newCartItems);
    setModal(false);
  };

  const handleAddProduct = () => {
    const newItem = {
      id: selectProduct,
      count: count,
      price: price * count,
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
    setSelectProduct(null);
    setCount(1);
    setModal(false);
  };

  return (
    <View style={styles.card}>
      <View key={id} style={styles.container}>
        <View style={styles.firstColumn}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.ingredients}>{ingredients}</Text>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.textDetail}>{description}</Text>
          </View>
          <View>
            <Text style={styles.text}>$ {price * count}</Text>
          </View>
          <View style={styles.emoji}>
            <AntDesign
              name="minuscircleo"
              size={24}
              onPress={() => setCount(count - 1)}
            ></AntDesign>
            <Text> {count} </Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              onPress={() => setCount(count + 1)}
            ></AntDesign>
          </View>
          <View style={styles.button}>
            <ButtonAdd title="Add Product" 
            onPress={() =>
               {
                addToCart({
                  id: id,
                  title: title,
                  description: description,
                  ingredients: ingredients,
                  image: image,
                  price: price,
                }),
                onHandleAdd({
                  id: id
                });
               }} />
          </View>
        </View>
      </View>
      <CoreModal
        modal={modal}
        setModal={setModal}
        selectProduct={selectProduct}
        price={price * count}
        onDeleteProduct={onDeleteProduct}
        count={count}
        handleAddProduct={handleAddProduct}
      />
    </View>
  );
}

export default ProductCart;
