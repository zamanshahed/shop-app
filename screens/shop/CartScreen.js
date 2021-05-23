import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useSelector } from "react-redux";

import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItem";

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
          Total:{" "}
          <Text style={styles.totalPayment}> ${cartTotalOrder.toFixed(2)}</Text>
        </Text>
        <Button
          style={styles.btnStyle}
          title="Confirm Order"
          color={Colors.btnSecondary}
          disabled={cartItems.length === 0}
        />
      </View>

      <FlatList
        style={styles.listStyle}
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            price={itemData.item.totalPrice}
            onDelete={() => {}}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 11,
  },
  summery: {
    backgroundColor: Colors.theme,
    marginTop: 14,
    marginBottom: 16,
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
  listStyle: {
    borderColor: Colors.theme,
    // borderWidth: 2,
    borderRadius: 8,
  },
});

export default CartScreen;
