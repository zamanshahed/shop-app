import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditProductScreen = (props) => {
  let title = "";
  if (props.productId.length() === 0) {
    title = "Add new product !!";
  } else {
    title = "Edit Product Screen !";
  }
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditProductScreen;
