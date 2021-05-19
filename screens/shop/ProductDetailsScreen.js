import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";

import Colors from "../../constants/Colors";

const ProductDetailsScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <ScrollView>
      <Image
        style={styles.imageStyle}
        source={{ uri: selectedProduct.imageUrl }}
      />
      <Text style={styles.priceText}>$ {selectedProduct.price}</Text>

      <View>
        <Button color={Colors.btnSecondary} title="Add to Cart" />
      </View>

      <Text style={styles.descriptionText}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
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
    fontSize: 18,
    textAlign: "center",
    padding: 5,
  },
});

export default ProductDetailsScreen;
