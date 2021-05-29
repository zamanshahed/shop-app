import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import CartItem from "./CartItem";
import Colors from "../../constants/Colors";

const OrderItem = (props) => {
  return (
    <View style={styles.screen}>
      {/* first row */}
      <View style={styles.summery}>
        <Text style={styles.priceText}>$ {props.orderAmount.toFixed(2)}</Text>
        <Text style={styles.dateText}>{props.orderDate}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button color={Colors.btnSecondary} title="Order Details" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 11,
    padding: 12,
    borderRadius: 12,
    shadowColor: "black",
    shadowOpacity: 5,
    shadowOffset: { width: 2, height: 1 },
    shadowRadius: 12,
    elevation: 5,
    // alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.theme,
  },
  summery: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 9,
    paddingBottom: 3,
  },
  priceText: {
    fontSize: 19,
    fontWeight: "bold",
    color: Colors.price,
  },
  dateText: {
    fontSize: 17,
    color: "#ccc",
  },
  btnContainer: {
    paddingHorizontal: 5,
  },
});

export default OrderItem;
