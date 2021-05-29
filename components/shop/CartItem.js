import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.summeryData}>
        <Text style={styles.titleText} numberOfLines={1}>
          {props.title}
        </Text>

        <Text style={styles.qtyText}>({props.quantity})</Text>
      </View>
      <View style={styles.summeryData}>
        <Text style={styles.priceText}>$ {props.price.toFixed(2)}</Text>
        {props.deleteable && (
          <TouchableOpacity onPress={props.onDelete} style={styles.deleteBtn}>
            <Ionicons name="ios-trash" size={25} color={Colors.btnPrimary} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    // width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 11,
    paddingHorizontal: 20,
    marginVertical: 11,
    borderRadius: 11,
    alignItems: "center",
    backgroundColor: Colors.theme,
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
    // marginLeft: 12,
    textAlign: "center",
    color: "#fff",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    width: "75%",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.price,
  },
  deleteBtn: {
    // marginLeft: 11,
    paddingHorizontal: 3,
  },
});

export default CartItem;
