import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const Card = (props) => {
  return (
    <View style={{ ...styles.cardStyle, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: "90%",
    height: 250,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: Colors.theme,
    marginVertical: 11,

    // Shadow Style
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { width: 12, height: 11 },
    shadowRadius: 15,
    elevation: 10,
  },
});

export default Card;
