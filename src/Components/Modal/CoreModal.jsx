import {
  View,
  Modal,
  Text,
  TouchableOpacity,
 
} from "react-native";
import { styles } from "./CoreStyle";
import { AntDesign } from "react-native-vector-icons";

const CoreModal = ({
  modal,
  count,
}) => {
  return (
    <Modal visible={modal}>
      <View style={styles.modalContainer}>
      <View style={styles.card}>
        <TouchableOpacity>
          <Text style={styles.count}>{count}</Text>

          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      </View>
      </View>
    </Modal>
  );
};

export default CoreModal;
