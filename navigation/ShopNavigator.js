import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrderScreen from "../screens/shop/OrderScreen";
import UserProductScreen from "../screens/user/UserProductsScreen";

import Colors from "../constants/Colors";

const mainNavConfig = {
  headerStyle: {
    backgroundColor: Colors.theme,
  },
  headerTitleStyle: {
    fontFamily: "BellotaText_700Bold",
    textAlign: "center",
  },
  headerTintColor: "white",
};

const ProductsNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailsScreen,
    Cart: CartScreen,
  },
  {
    //   navigator config:
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="ios-cart" size={25} color={drawerConfig.tintColor} />
      ),
    },
    defaultNavigationOptions: mainNavConfig,
  }
);

const OrderNavigator = createStackNavigator(
  {
    orders: OrderScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="ios-list" size={25} color={drawerConfig.tintColor} />
      ),
    },
    defaultNavigationOptions: mainNavConfig,
  }
);

const AdminNavigator = createStackNavigator(
  {
    UserProducts: UserProductScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="ios-create" size={25} color={drawerConfig.tintColor} />
      ),
    },
    defaultNavigationOptions: mainNavConfig,
  }
);

const sideDrawerNav = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrderNavigator,
    Admin: AdminNavigator,
  },
  {
    // hideStatusBar: true,
    drawerBackgroundColor: Colors.theme,
    drawerType: "slide",
    contentOptions: {
      activeTintColor: Colors.price,
      inactiveTintColor: "#fff",
      itemsContainerStyle: {
        marginTop: "10%",
      },
    },
  }
);

export default createAppContainer(sideDrawerNav);
