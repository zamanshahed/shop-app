import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import Colors from "../constants/Colors";

const ProductsNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailsScreen,
    Cart: CartScreen,
  },
  {
    //   navigator config:
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTitleStyle: {
        fontFamily: "BellotaText_700Bold",
        textAlign: "center",
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(ProductsNavigator);
