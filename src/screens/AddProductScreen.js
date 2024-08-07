// AddProductScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';

const AddProductScreen = ({ route, navigation }) => {
  const { id = null, title = '', price = '', image = '' } = route.params || {};

  const [productTitle, setProductTitle] = useState(title);
  const [productPrice, setProductPrice] = useState(price);
  const [productImage, setProductImage] = useState(image);

  const handleSave = () => {
    // Add logic to save the product details
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={productTitle}
        onChangeText={setProductTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={productPrice}
        onChangeText={setProductPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Image URL"
        value={productImage}
        onChangeText={setProductImage}
        style={styles.input}
      />
      {productImage ? (
        <Image source={{ uri: productImage }} style={styles.image} />
      ) : null}
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default AddProductScreen;
