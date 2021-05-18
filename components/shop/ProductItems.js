import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  ScrollView,
} from "react-native";

import Card from "../Card";
import Colors from "../../constants/Colors";

const ProductItems = (props) => {
  return (
    <View style={styles.container}>
      <Card>
        <ImageBackground
          source={{ uri: props.imageUrl }}
          style={styles.bgImage}
        >
          <Text style={styles.titleText}>{props.title}</Text>
        </ImageBackground>
        <View style={styles.productContainer}>
          <View style={styles.btnStyle}>
            <Button
              color={Colors.btnPrimary}
              title="Details"
              onPress={props.onViewDetails}
            />
          </View>
          <Text style={styles.priceTag}>$ {props.price.toFixed(2)}</Text>
          {/* toFixed(2): for 2 decimal places */}
          <View style={styles.btnStyle}>
            <Button
              color={Colors.btnSecondary}
              title="To Cart"
              onPress={props.onAddToCart}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  titleText: {
    height: 33,
    fontSize: 23,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#47535E",
  },
  btnStyle: {
    width: 95,
    borderRadius: 12,
    overflow: "hidden",
    padding: 12,
  },
  productContainer: {
    flexDirection: "row",
    height: 41,
    backgroundColor: "#47535E",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageHeader: {
    height: "85%",
  },
  priceTag: {
    color: Colors.price,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default ProductItems;
