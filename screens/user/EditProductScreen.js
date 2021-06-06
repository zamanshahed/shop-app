import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from 'react-redux';

import MyHeaderButton from "../../components/UI/MyHeaderButton";
import Colors from "../../constants/Colors";

const EditProductScreen = (props) => {

  const prodId = props.navigation.getParam("productId");

  const editedProduct = useSelector(state=>state.products.userCreatedProducts.find(prod=>prod.id===prodId));

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
  const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');

  const submitHandler = useCallback(() =>{ //ensures function re-created every time component renders, to avoid infinite loops
    console.log("Submit Executed !!");
  }, []);

  useEffect(()=>{
    props.navigation.setParams({'submit': submitHandler})
  }, [submitHandler])

  return (
    <ScrollView>
      <View style={styles.formStyle}>
        <Text style={styles.labelStyle}>Edit Title</Text>
        <TextInput style={styles.inputStyle} value={title} onChangeText={text => setTitle(text)} />
      </View>
      <View style={styles.formStyle}>
        <Text style={styles.labelStyle}>Edit Image Url</Text>
        <TextInput style={styles.inputStyle} value={imageUrl} onChangeText={text => setImageUrl(text)} />
      </View>
      {editedProduct ? null : (
        <View style={styles.formStyle}>
          <Text style={styles.labelStyle}>Edit Price</Text>
          <TextInput style={styles.inputStyle} value={price} onChangeText={text => setPrice(text)} />
        </View>)}
      <View style={styles.formStyle}>
        <Text style={styles.labelStyle}>Edit Desription</Text>
        <TextInput style={styles.inputStyle} value={description} onChangeText={text => setDescription(text)} />
      </View>
    </ScrollView>
  );
};

EditProductScreen.navigationOptions = (navData) => {

  const submitFn = navData.navigation.getParam('submit');

  return {
    headerTitle: navData.navigation.getParam("productId")
      ? "Edit Product Mode"
      : "Add New Product",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          title="Save"
          iconName="ios-checkmark"
          onPress={submitFn}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  formStyle: {
    paddingVertical: 11,
  },
  inputStyle: {
    borderBottomWidth: 4,
    borderColor: Colors.theme,
    borderRadius: 300,
    fontSize: 16,
    paddingHorizontal: 15,
  },
  labelStyle: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default EditProductScreen;
