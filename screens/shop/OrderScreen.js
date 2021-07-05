import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MyHeaderButton from "../../components/UI/MyHeaderButton";
import OrderItem from "../../components/shop/OrderITem";
import * as ordersActions from "../../store-redux/actions/Order";
import { Colors } from "react-native/Libraries/NewAppScreen";

const OrderScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(ordersActions.fetchOrder()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color={Colors.theme} />
      </View>
    );
  }

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

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OrderScreen;
