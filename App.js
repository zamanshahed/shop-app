import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  ScrollView,
} from "react-native";

import Card from "./components/Card";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* product #01 */}
        <Card>
          <ImageBackground
            source={{
              uri:
                "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/04/amazfit-bip-1922309.jpg?itok=gK-S_ziw",
            }}
            style={styles.bgImage}
          >
            <Text style={styles.titleText}>Product Title</Text>
          </ImageBackground>
          <View style={styles.productContainer}>
            <View style={styles.btnStyle}>
              <Button color="#E74292" title="Wishlist" />
            </View>
            <Text style={styles.priceTag}>price</Text>
            <View style={styles.btnStyle}>
              <Button color="#10A881" title="Buy Now" />
            </View>
          </View>
        </Card>

        {/* product #01 */}
        <Card>
          <ImageBackground
            source={{
              uri:
                "http://s3.amazonaws.com/digitaltrends-uploads-prod/2015/10/Peregrine_Hero_02_Retail.jpg",
            }}
            style={styles.bgImage}
          >
            <Text style={styles.titleText}>Product Title</Text>
          </ImageBackground>
          <View style={styles.productContainer}>
            <View style={styles.btnStyle}>
              <Button color="#E74292" title="Wishlist" />
            </View>
            <Text style={styles.priceTag}>price</Text>
            <View style={styles.btnStyle}>
              <Button color="#10A881" title="Buy Now" />
            </View>
          </View>
        </Card>

        {/* product #01 */}
        <Card>
          <ImageBackground
            source={{
              uri:
                "https://d1lss44hh2trtw.cloudfront.net/assets/article/2020/09/01/nvidia-bfgpu-3090-revealed1_feature.jpg",
            }}
            style={styles.bgImage}
          >
            <Text style={styles.titleText}>Product Title</Text>
          </ImageBackground>
          <View style={styles.productContainer}>
            <View style={styles.btnStyle}>
              <Button color="#E74292" title="Wishlist" />
            </View>
            <Text style={styles.priceTag}>price</Text>
            <View style={styles.btnStyle}>
              <Button color="#10A881" title="Buy Now" />
            </View>
          </View>
        </Card>

        {/* <StatusBar style="auto" /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAE0E2",
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
    color: "cyan",
    fontSize: 15,
    textTransform: "uppercase",
  },
});
