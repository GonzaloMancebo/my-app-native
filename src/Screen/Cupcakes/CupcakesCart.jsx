import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "react-native-vector-icons";
import ButtonAdd from "../../Components/Button/ButtomAdd/ButtonAdd";
import CoreModal from "../../Components/Modal/CoreModal";
import { styles } from "../Cupcakes/CupcakesStyles";

function CupcakesCart({
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
    <ScrollView>
    <View key={id} style={styles.container}>
        <View style={styles.firstColumn}>
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.image} source={{ uri: image }} />
          <Text style={styles.text}>$ {price * count}</Text>
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
            <ButtonAdd title="Add Product " onPress={() => onHandleAdd (id, count, price * count)} />
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
    </ScrollView>
  );
}

export default CupcakesCart;
