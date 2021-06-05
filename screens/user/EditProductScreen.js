import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MyHeaderButton from "../../components/UI/MyHeaderButton";
import Colors from '../../constants/Colors';

const EditProductScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.formStyle}>
        <Text style={styles.labelStyle}>Edit Title</Text>
        <TextInput style={styles.inputStyle} />
      </View>
      <View style={styles.formStyle}>
        <Text style={styles.labelStyle}>Edit Image Url</Text>
        <TextInput style={styles.inputStyle} />
      </View>
      <View style={styles.formStyle}>
        <Text style={styles.labelStyle}>Edit Price</Text>
        <TextInput style={styles.inputStyle} />
      </View>
      <View style={styles.formStyle}>
        <Text style={styles.labelStyle}>Edit Desription</Text>
        <TextInput style={styles.inputStyle} />
      </View>
    </ScrollView>
  );
};

EditProductScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam("productId") ? "Edit Product Mode" : "Add New Product",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          title="Save"
          iconName="ios-checkmark"
          onPress={() => {
            navData.navigation.navigate("EditProduct");
          }}
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  formStyle: {
    padding: 11
  },
  inputStyle: {
    borderBottomWidth: 4,
    borderColor: Colors.theme,
    borderRadius: 300,
    fontSize: 16,
    paddingHorizontal: 15,
  },
  labelStyle: {
    fontWeight: "bold",
    fontSize: 18
  }
});

export default EditProductScreen;
