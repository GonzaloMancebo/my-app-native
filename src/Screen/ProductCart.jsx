import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import ButtonAdd from "../Components/Button/ButtomAdd/ButtonAdd";
import CoreModal from "../Components/Modal/CoreModal";
import { styles } from "../Screen/CartStyles";

function ProductCart({
  id,
  title,
  description,
  ingredients,
  image,
  price,
  addToCart,
}) {
  const [count, setCount] = useState(1);
  const [modal, setModal] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);
  const [buttonColor, setButtonColor] = useState("#000000");

  const onHandleAdd = (id) => {
    setSelectProduct(id);
    setModal(!modal);
  };

  const handleAddToCart = () => {
    addToCart({
      id,
      count,
    });
    onHandleAdd({
      id,
    });
    setCount(1);
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
            <ButtonAdd
              title="Add Product"
              onPress={handleAddToCart}
            />
          </View>
        </View>
      </View>
      <CoreModal
        modal={modal}
        setModal={setModal}
        selectProduct={selectProduct}
        price={price * count}
        count={count}
        title={title}
        image={image}
      />
    </View>
  );
}

export default ProductCart;
