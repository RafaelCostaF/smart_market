import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { ListItem, Icon } from "react-native-elements";

const ProductList = ({ products, navigation }) => {
  return (
    <View>
      {products.map((product) => (
        <ListItem key={product.id} bottomDivider>
          <Image
            source={
              product.image
                ? { uri: product.image }
                : require("../../assets/placeholder.png")
            }
            style={styles.image}
          />
          <ListItem.Content>
            <ListItem.Title>{product.label}</ListItem.Title>
            <ListItem.Subtitle>Preço: {product.preco}</ListItem.Subtitle>
          </ListItem.Content>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Pressed");
            }}
          >
            <Icon name="trash" type="font-awesome" color="#900" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AddProduct", {
                id: product.id,
                title: product.label,
                price: product.preco,
                image: product.image,
              })
            }
          >
            <Icon name="edit" type="font-awesome" color="#007bff" />
          </TouchableOpacity>
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default ProductList;
