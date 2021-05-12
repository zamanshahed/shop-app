import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    borderColor: "#47535E",
    borderRadius: 15,
    borderWidth: 5,
    shadowColor: "black",
    shadowOpacity: 5,
    shadowOffset: { width: 2, height: 1 },
    shadowRadius: 15,
    elevation: 5,
    marginVertical: 15,
  },
});

export default Card;
