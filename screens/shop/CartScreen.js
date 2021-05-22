import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useSelector } from "react-redux";

import Colors from "../../constants/Colors";

const CartScreen = (props) => {
  const cartTotalOrder = useSelector((state) => state.cart.totalPayment);

  return (
    <View style={styles.screen}>
      <View style={styles.summery}>
        <Text style={styles.summeryText}>
          Total: <Text style={styles.totalPayment}> ${cartTotalOrder}</Text>
        </Text>
        <Button
          style={styles.btnStyle}
          title="Confirm Order"
          color={Colors.btnSecondary}
        />
      </View>

      <View>
        <Text>CART ITEMS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 11,
  },
  summery: {
    backgroundColor: Colors.theme,
    marginBottom: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: Colors.theme,
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
  },
  summeryText: {
    color: Colors.price,
    fontSize: 21,
    textAlign: "center",
  },
  btnStyle: {
    borderRadius: 11,
  },
  totalPayment: {},
  totalPayment: {},
});

export default CartScreen;
