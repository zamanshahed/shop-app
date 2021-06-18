import React, { useEffect, useState } from "react";
import {
  FlatList,
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItems from "../../components/shop/ProductItems";
import * as cartActions from "../../store-redux/actions/Cart";
import * as productActions from "../../store-redux/actions/products";
import MyHeaderButton from "../../components/UI/MyHeaderButton";
import Colors from "../../constants/Colors";

const ProductOverviewScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadingProducts = async () => {
      setIsLoading(true);
      await dispatch(productActions.fetchProducts());
      setIsLoading(false);
    };
    loadingProducts();
  }, [dispatch]);

  const productDetailsHandler = (id, title) => {
    props.navigation.navigate("ProductDetail", {
      productId: id,
      productTitle: title,
    });
  };

  if (isLoading) {
    return (
      <View style={styles.centeredItem}>
        <ActivityIndicator size="large" color={Colors.theme} />
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <TouchableOpacity
          onPress={() =>
            productDetailsHandler(itemData.item.id, itemData.item.title)
          }
        >
          <ProductItems
            imageUrl={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetails={() =>
              productDetailsHandler(itemData.item.id, itemData.item.title)
            }
          >
            <View style={styles.btnStyle}>
              <Button
                color={Colors.btnPrimary}
                title="Details"
                onPress={() =>
                  productDetailsHandler(itemData.item.id, itemData.item.title)
                }
              />
            </View>
            <Text style={styles.priceTag}>
              $ {itemData.item.price.toFixed(2)}
            </Text>
            {/* toFixed(2): for 2 decimal places */}
            <View style={styles.btnStyle}>
              <Button
                color={Colors.btnSecondary}
                title="To Cart"
                onPress={() => {
                  dispatch(cartActions.addToCart(itemData.item));
                }}
              />
            </View>
          </ProductItems>
        </TouchableOpacity>
      )}
    />
  );
};

ProductOverviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Products",
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
          iconName="md-cart"
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  btnStyle: {
    width: 110,
    borderRadius: 12,
    overflow: "hidden",
    padding: 12,
  },
  priceTag: {
    color: Colors.price,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "Aldrich_400Regular",
  },
  centeredItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductOverviewScreen;
