import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import ProductList from "../components/ProductList";
import { Icon } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      { id: 1, label: "produto 1", preco: 0.23 },
      { id: 2, label: "produto 2", preco: 123.22 },
      { id: 3, label: "produto 3", preco: 2 },
    ]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ProductList products={products} navigation={navigation} />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("AddProduct")}
      >
        <Icon name="plus" type="font-awesome" color="#fff" size={24} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default HomeScreen;
