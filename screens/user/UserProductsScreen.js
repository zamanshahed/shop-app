import React from "react";
import {
  FlatList,
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import * as productActions from "../../store-redux/actions/products";
import PorductItem from "../../components/shop/ProductItems";
import MyHeaderButton from "../../components/UI/MyHeaderButton";
import Colors from "../../constants/Colors";

const UserProductScreen = (props) => {
  const userProducts = useSelector(
    (state) => state.products.userCreatedProducts
  );
  const editSelectedProduct = (id) => {
    props.navigation.navigate("EditProduct", { productId: id });
  };

  const dispatch = useDispatch();


  const deleteHandler = (id) =>{
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
        {text: 'No', style: 'default'},
        {tpext: 'Yes', style: 'destructive', onPress: ()=> {dispatch(productActions.DeleteProduct(id))}}
      ])
  }

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
        >
          <View style={styles.btnStyle}>
            <Button
              color={Colors.btnSecondary}
              title="Edit item"
              onPress={() => editSelectedProduct(itemData.item.id)}
            />
          </View>
          <Text style={styles.priceTag}>
            $ {itemData.item.price.toFixed(2)}
          </Text>
          {/* toFixed(2): for 2 decimal places */}
          <View style={styles.btnStyle}>
            <Button
              color={Colors.btnPrimary}
              title="delete item"
              onPress={deleteHandler.bind(this, itemData.item.id)}
            />
          </View>
        </PorductItem>
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
          title="Add"
          iconName="ios-create"
          onPress={() => {
            navData.navigation.navigate("EditProduct");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  btnStyle: {
    width: 120,
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
});
export default UserProductScreen;
