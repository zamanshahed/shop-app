import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";

import Colors from "../../constants/Colors";

const ProductDetailsScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <View>
      <View>
        <Image
          style={styles.imageStyle}
          source={{ uri: selectedProduct.imageUrl }}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{selectedProduct.title}</Text>
          <Text style={styles.priceText}>$ {selectedProduct.price}</Text>
        </View>

        <View>
          <Button color={Colors.btnSecondary} title="Add to Cart" />
        </View>
      </View>
      <View style={styles.descriptionStyle}>
        <Text style={styles.descriptionText}>
          {selectedProduct.description}
        </Text>
      </View>
    </View>
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
    height: "65%",
  },
  titleText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    padding: 1,
  },
  priceText: {
    fontSize: 24,
    color: Colors.price,
    fontWeight: "bold",
    padding: 4,
  },
  titleContainer: {
    height: 37,
    backgroundColor: Colors.theme,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  descriptionStyle: {
    marginTop: "-11%",
    paddingHorizontal: 11,
  },
  descriptionText: {
    fontSize: 15,
  },
});

export default ProductDetailsScreen;
