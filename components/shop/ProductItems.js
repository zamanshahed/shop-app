import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";

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
        <View style={styles.productContainer}>{props.children}</View>
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
    // fontWeight: "bold",
    backgroundColor: Colors.theme,
    fontFamily: "BellotaText_700Bold",
  },
  btnStyle: {
    width: 110,
    borderRadius: 12,
    overflow: "hidden",
    padding: 12,
  },
  productContainer: {
    flexDirection: "row",
    height: 41,
    backgroundColor: Colors.theme,
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
    fontFamily: "Aldrich_400Regular",
  },
});

export default ProductItems;
