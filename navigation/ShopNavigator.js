import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrderScreen from "../screens/shop/OrderScreen";
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
    defaultNavigationOptions: mainNavConfig,
  }
);

const OrderNavigator = createStackNavigator(
  {
    orders: OrderScreen,
  },
  {
    defaultNavigationOptions: mainNavConfig,
  }
);

const sideDrawerNav = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrderNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.theme,
    },
  }
);

export default createAppContainer(sideDrawerNav);
