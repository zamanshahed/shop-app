import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import PorductItem from "../../components/shop/ProductItems";
import MyHeaderButton from "../../components/UI/MyHeaderButton";

const UserProductScreen = (props) => {
  const userProducts = useSelector(
    (state) => state.products.userCreatedProducts
  );

  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PorductItem
          imageUrl={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetails={() => {}}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

UserProductScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Products",
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

export default UserProductScreen;
