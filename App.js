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

const roodReducer = combineReducers({
  products: productReducer,
});

const storeRedux = createStore(roodReducer);

//custom font handler
// const fetchFonts = () => {
//   return Font.loadAsync({
//     Assistant: require("./assets/fonts/Assistant-VariableFont_wght.ttf"),
//     Comforta: require("./assets/fonts/Comfortaa-VariableFont_wght.ttf"),
//     Koho: require("./assets/fonts/KoHo-Light.ttf"),
//     Varta: require("./assets/fonts/Varta-VariableFont_wght.ttf"),
//   });
// };

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);

  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => {
  //         setFontLoaded(true);
  //       }}
  //       onError={(err) => console.log(err)}
  //     />
  //   );
  // }
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
