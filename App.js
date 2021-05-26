import React, { useState } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  BellotaText_700Bold,
  Comfortaa_400Regular,
  Aldrich_400Regular,
} from "@expo-google-fonts/dev";

import productReducer from "./store-redux/reducers/products";
import ShopNavigator from "./navigation/ShopNavigator";
import cartReducer from "./store-redux/reducers/Cart";
import orderReducer from "./store-redux/reducers/Order";

const roodReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer,
});

const storeRedux = createStore(roodReducer);

export default function App() {
  let [fontsLoaded] = useFonts({
    BellotaText_700Bold,
    Comfortaa_400Regular,
    Aldrich_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={storeRedux}>
      <ShopNavigator />
    </Provider>
  );
}
