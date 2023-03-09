import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import ButtonAdd from "../../Components/Button/ButtomAdd/ButtonAdd";
import CoreModal from "../../Components/Modal/CoreModal";
import { styles } from "../Blended/BlendedStyles";

function BlendedCart({
  id,
  title,
  description,
  ingredients,
  image,
  price,
}) {
  const [count, setCount] = useState(1);
  const [modal, setModal] = useState(false);
  const [selectProduct, setSelectProduct] = useState([]);
  const [cart, setCart] = useState([]);


  const onHandleAdd = (id, count, price) => {
    setSelectProduct({id, count, price});
    setModal(true);
  };


  const handleAddToCart = () => {
    const product = { id, title, description, ingredients, image, price, count };
    setCart([...cart, product]);
    onHandleAdd(id);
    setCount(1);
  };


  const handleCloseModal = () => {
    setModal(false);
    setSelectProduct(null);
  };

  return (
    <View style={styles.card}>
      <View key={id} style={styles.container}>
        <View style={styles.firstColumn}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.ingredients}>{description}</Text>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.textDetail}>{ingredients}</Text>
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
            <ButtonAdd title="Add Product" onPress={() => onHandleAdd (id, count, price * count)} />
          </View>
        </View>
      </View>
      <CoreModal
        modal={modal}
        setModal={setModal}
        selectProduct={selectProduct}
        title={title}
        image={image}
        onCloseModal = {handleCloseModal}
      />
    </View>
  );
}

export default BlendedCart;
