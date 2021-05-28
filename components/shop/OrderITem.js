import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import CartItem from "./CartItem";

const OrderItem = (props) => {
  return (
    <View>
      {/* first row */}
      <View>
        <Text>$ {props.orderAmount.toFixed(2)}</Text>
        <Text>{props.orderDate}</Text>
      </View>
      <Button title="Order Details" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default OrderItem;
