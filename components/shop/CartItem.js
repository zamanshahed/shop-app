import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.summeryData}>
        <Text style={styles.titleText}>{props.title}</Text>

        <Text style={styles.qtyText}>({props.quantity})</Text>
      </View>
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
    margin: 11,
    borderRadius: 11,
    alignItems: "center",

    shadowColor: Colors.theme,
    shadowOpacity: 1,
    shadowOffset: { width: 12, height: 11 },
    shadowRadius: 15,
    elevation: 4,
  },
  summeryData: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  qtyText: {
    fontSize: 17,
    color: Colors.btnPrimary,
    fontWeight: "bold",
    marginLeft: 12,
    textAlign: "center",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "700",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "700",
  },
  deleteBtn: {
    marginLeft: 11,
  },
});

export default CartItem;
