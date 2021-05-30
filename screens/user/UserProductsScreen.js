import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import PorductItem from "../../components/shop/ProductItems";

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

export default UserProductScreen;
