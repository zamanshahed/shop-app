import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MyHeaderButton from "../../components/UI/MyHeaderButton";

const OrderScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.orderId}
      renderItem={(itemData) => <Text>{itemData.item.orderTotalAmount}</Text>}
    />
  );
};

OrderScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "My Orders",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          title="Cart"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          title="Cart"
          iconName="ios-home"
          onPress={() => {
            navData.navigation.navigate("ProductOverview");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default OrderScreen;
