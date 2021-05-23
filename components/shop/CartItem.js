import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.summeryData}>
        <Text style={styles.qtyText}>{props.quantity}</Text>
        <Text style={styles.titleText}>{props.title}</Text>
      </Text>
      <View style={styles.summeryData}>
        <Text style={styles.priceText}>$ {props.price.toFixed(2)}</Text>
        <TouchableOpacity onPress={props.onDelete} style={styles.deleteBtn}>
          <Ionicons name="ios-trash" size={25} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 11,
    marginHorizontal: 11,
  },
  summeryData: {},
  qtyText: {},
  titleText: {},
  priceText: {},
  deleteBtn: {
    marginLeft: 11,
  },
});

export default CartItem;
