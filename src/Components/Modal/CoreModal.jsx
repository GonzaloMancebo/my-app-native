import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import data from "./../../data/data";
import { styles } from "./CoreStyle";
import { AntDesign } from "react-native-vector-icons";

const CoreModal = ({
  modal,
  setModal,
  selectProduct,
  price,
  onDeleteProduct,
  count,
  handleAddProduct,
}) => {
  const product = data.filter((item) => item.id === selectProduct);

  const formattedPrice = price ? price.toLocaleString() : "";

  const handleDeleteProduct = () => {
    onDeleteProduct(selectProduct);
    setModal(false);
  };

  const handleAddProductPress = () => {
    handleAddProduct();
    setModal(false);
  };

  return (
    <Modal visible={modal}>
      <Text style={styles.title}>Purchase summary</Text>

      <View style={styles.card}>
        <View style={styles.container}>
          <View style={styles.firstColumn}>
            <Text>{product[0]?.title}</Text>
            <Image style={styles.image} source={{ uri: product[0]?.image }} />
          </View>

          <View style={styles.column}>
            <View style={styles.text}>
              <Text> Cantidad: {count} u. </Text>
              <Text> Subtotal: $ {formattedPrice}</Text>
            </View>

            <View style={styles.delete}>
              <TouchableOpacity
                style={styles.btn}
                onPress={handleDeleteProduct}
              >
                <AntDesign name="delete" size={20} color="red"></AntDesign>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.emoji}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setModal(!modal)}
            >
              <AntDesign name="close" size={24}></AntDesign>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text> Total: $ {formattedPrice}</Text>

      <View style={styles.addcontainer}>
        {selectProduct && (
          <>
            <View style={styles.addproduct}>
              <Button
                title="Add more products"
                onPress={handleAddProductPress}
              />
            </View>
            <View style={styles.finishproduct}>
              <Button
                title="Checkout"
                color={"red"}
                onPress={() => console.log("Compra realizada")}
              />
            </View>
          </>
        )}
      </View>
    </Modal>
  );
};

export default CoreModal;
