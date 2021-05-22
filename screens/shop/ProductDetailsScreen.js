import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Colors from "../../constants/Colors";
import * as cartActions from "../../store-redux/actions/Cart";
import MyHeaderButton from "../../components/UI/MyHeaderButton";

const ProductDetailsScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image
        style={styles.imageStyle}
        source={{ uri: selectedProduct.imageUrl }}
      />

      <View style={styles.summery}>
        <Text style={styles.priceText}>$ {selectedProduct.price}</Text>
        <Button
          color={Colors.btnSecondary}
          title="Add to Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>

      <Text style={styles.descriptionText}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item title="Cart" iconName="md-cart" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: 250,
  },
  titleText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    padding: 1,
  },
  priceText: {
    color: Colors.price,
    backgroundColor: Colors.theme,
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    height: 40,
    padding: 5,
  },
  titleContainer: {
    height: 37,
    backgroundColor: Colors.theme,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  descriptionStyle: {
    marginTop: "-11%",
    textAlign: "center",
    paddingHorizontal: 11,
  },
  descriptionText: {
    fontFamily: "Comfortaa_400Regular",
    fontSize: 18,
    textAlign: "center",
    padding: 5,
  },
  summery: {
    backgroundColor: Colors.theme,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    alignItems: "center",
    color: Colors.price,
  },
});

export default ProductDetailsScreen;
