import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, SectionList, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAllProducts } from "../../../Firebase/getAllProducts";
import ProductCard from "./ProductCard";
import { styles } from "./ProductCardStyles";

function ProductsScreen() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const products = await getAllProducts();

      const grouped = groupByCategory(products);
      setSections(grouped);
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

    return Object.keys(grouped).map((key) => ({
      title: key.charAt(0).toUpperCase() + key.slice(1),
      data: grouped[key],
    }));
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#8B6E4C" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="dark" />

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard {...item} />}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

export default ProductsScreen;
