import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import ButtonAdd from "../../Components/Button/ButtomAdd/ButtonAdd";
import CoreModal from "../../Components/Modal/CoreModal";
import { styles } from "../Cookies/CookiesStyles";

function CookiesCart({ id, title, description, ingredients, image, price }) {
  const [count, setCount] = useState(1);
  const [modal, setModal] = useState(false);
  const [selectProduct, setSelectProduct] = useState([]);

  const onHandleAdd = (id, count, price) => {
    const productIndex = selectProduct.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      const updatedProduct = { ...selectProduct[productIndex], count: selectProduct[productIndex].count + count };
      const updatedProducts = [...selectProduct];
      updatedProducts[productIndex] = updatedProduct;
      setSelectProduct(updatedProducts);
    } else {
      const newProduct = { id, count, price };
      setSelectProduct([...selectProduct, newProduct]);
    }
    setModal(true);
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
              color={"white"}
              onPress={() => setCount(count - 1)}
            ></AntDesign>
            <Text style={styles.textCount}> {count} </Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              color={"white"}
              onPress={() => setCount(count + 1)}
            ></AntDesign>
          </View>
          <View style={styles.button}>
            <ButtonAdd
              title="Add Product"
              onPress={() => onHandleAdd(id, count, price * count)}
            />
          </View>
        </View>
      </View>
      <CoreModal
        modal={modal}
        setModal={setModal}
        selectProduct={selectProduct}
        title={title}
        image={image}
        onCloseModal={handleCloseModal}
      />
    </View>
  );
}

export default CookiesCart;
