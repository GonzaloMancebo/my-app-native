import React, { useEffect, useState, useContext } from "react";
import {
  View,
  ActivityIndicator,
  SectionList,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../../../Firebase/getAllProducts";
import { styles } from "./ProductCardStyles";
import { useNavigation } from "@react-navigation/native";
import ProductDetailModal from "../../Components/Modal/ProductDetailModal";
import CartModal from "../../Components/Modal/CartModal";
import { CartContext } from "../../Context/CartContext";

const CATEGORIES = ["coffee", "cookies", "cupcakes", "blended", "toasted"];

function ProductsScreen() {
  const [sections, setSections] = useState([]);
  const [filteredSections, setFilteredSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartModalVisible, setCartModalVisible] = useState(false);

  const navigation = useNavigation();
  const { cart } = useContext(CartContext); // ⬅️ AGREGAR ESTO

  useEffect(() => {
    const fetch = async () => {
      const products = await getAllProducts();
      const grouped = groupByCategory(products);
      setSections(grouped);
      setFilteredSections(grouped);
      setLoading(false);
    };

    fetch();
  }, []);

  const groupByCategory = (products) => {
    const grouped = {};

    products.forEach((item) => {
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    });

    return Object.keys(grouped).map((cat) => ({
      title: cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase(),
      data: grouped[cat],
      key: cat,
    }));
  };

  const handleCategoryFilter = (cat) => {
    setSelectedCategory(cat);
    if (cat === null) {
      setFilteredSections(sections);
      return;
    }
    setFilteredSections(sections.filter((sec) => sec.key === cat));
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const openCartAfterAdd = () => setCartModalVisible(true);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
        <ActivityIndicator size="large" color="#8B6E4C" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="dark" />

      {/* HEADER */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 12,
          paddingHorizontal: 16,
          backgroundColor: "#fff",
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>←</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 12 }}>
          Coffee Shop
        </Text>
      </View>

      {/* CATEGORIES */}
      <View style={{ paddingTop: 6, paddingBottom: 12 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
            alignItems: "center",
            height: 55,
          }}
        >
          <TouchableOpacity
            onPress={() => handleCategoryFilter(null)}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderRadius: 22,
              marginRight: 10,
              backgroundColor: selectedCategory === null ? "#8B6E4C" : "#e0e0e0",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: selectedCategory === null ? "white" : "black", fontWeight: "600" }}>
              Todos
            </Text>
          </TouchableOpacity>

          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => handleCategoryFilter(cat)}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 22,
                marginRight: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: selectedCategory === cat ? "#8B6E4C" : "#e0e0e0",
              }}
            >
              <Text
                style={{
                  color: selectedCategory === cat ? "white" : "black",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* PRODUCTS */}
      <SectionList
        sections={filteredSections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} onAddPress={openModal} />
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* MODAL DE PRODUCTO */}
<ProductDetailModal
  visible={modalVisible}
  product={selectedProduct}
  onClose={() => setModalVisible(false)}
  onAddToCart={() => {
    setModalVisible(false);
    setCartModalVisible(true);    // 👈 ahora sí se ejecuta
  }}
/>



      {/* MODAL DEL CARRITO */}
      <CartModal
        visible={cartModalVisible}
        onClose={() => setCartModalVisible(false)}
        cart={cart}
        onCheckout={() => console.log("Finalizar compra!")}
      />
    </SafeAreaView>
  );
}

export default ProductsScreen;
