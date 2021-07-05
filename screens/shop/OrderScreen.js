import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MyHeaderButton from "../../components/UI/MyHeaderButton";
import OrderItem from "../../components/shop/OrderITem";
import * as ordersActions from "../../store-redux/actions/Order";

const OrderScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ordersActions.fetchOrder());
  }, [dispatch]);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.orderId}
      renderItem={(itemData) => (
        <OrderItem
          orderAmount={itemData.item.orderTotalAmount}
          orderDate={itemData.item.ReadableDate}
          items={itemData.item.orderItems}
        />
      )}
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
