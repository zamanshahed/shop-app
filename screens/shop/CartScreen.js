import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useSelector } from "react-redux";

import Colors from "../../constants/Colors";

const CartScreen = (props) => {
  const cartTotalOrder = useSelector((state) => state.cart.totalPayment);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        totalPrice: state.cart.items[key].totalPrice,
      });
    }
    return transformedCartItems;
  });

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
          disabled={cartItems.length === 0}
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
    padding: 10,
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 5,
    shadowOffset: { width: 2, height: 1 },
    shadowRadius: 15,
    elevation: 5,
  },
  summeryText: {
    color: "white",
    fontSize: 21,
    textAlign: "center",
  },
  btnStyle: {
    borderRadius: 11,
  },
  totalPayment: {
    color: Colors.price,
  },
});

export default CartScreen;
