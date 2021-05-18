import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  ScrollView,
} from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import productReducer from "./store-redux/reducers/products";
import ShopNavigator from "./navigation/ShopNavigator";

const roodReducer = combineReducers({
  products: productReducer,
});

const storeRedux = createStore(roodReducer);

export default function App() {
  return (
    <Provider store={storeRedux}>
      <ShopNavigator />
    </Provider>
  );
}
