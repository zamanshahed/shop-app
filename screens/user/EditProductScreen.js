import React, { useEffect, useCallback, useReducer } from "react";
import { View, StyleSheet, Alert, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import MyHeaderButton from "../../components/UI/MyHeaderButton";
import Input from "../../components/UI/Input";
import * as productActions from "../../store-redux/actions/products";

const FORM_UPDATE = "FORM_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };

    const updatedValidites = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };

    let updatedFormIsValid = true;
    for (const key in updatedValidites) {
      updatedFormIsValid = updatedFormIsValid && updatedValidites[key]; //if one input is invalid, full form is invalid !
    }

    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidites,
      inputValues: updatedValues,
    };
  }
  return state; //if anything wrong, return unchanged state.
};

const EditProductScreen = (props) => {
  const prodId = props.navigation.getParam("productId");

  const editedProduct = useSelector((state) =>
    state.products.userCreatedProducts.find((prod) => prod.id === prodId)
  );

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editedProduct ? editedProduct.title : "",
      imageUrl: editedProduct ? editedProduct.imageUrl : "",
      description: editedProduct ? editedProduct.description : "",
      price: "",
    },
    inputValidities: {
      title: editedProduct ? true : false,
      imageUrl: editedProduct ? true : false,
      description: editedProduct ? true : false,
      price: editedProduct ? true : false,
    },
    formIsValid: editedProduct ? true : false,
  });

  // const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
  // const [titleIsValid, setTitleIsValid] = useState(false);
  // const [imageUrl, setImageUrl] = useState(
  //   editedProduct ? editedProduct.imageUrl : ""
  // );
  // const [price, setPrice] = useState("");
  // const [description, setDescription] = useState(
  //   editedProduct ? editedProduct.description : ""
  // );

  const submitHandler = useCallback(() => {
    //ensures function re-created every time component renders, to avoid infinite loops
    // console.log("Submit Executed !!");

    //cancel function execution for validity
    if (!formState.formIsValid) {
      Alert.alert("Wrong input!", "Check your inputs and try again.", [
        { text: "Ok" },
      ]);
      return;
    }

    if (editedProduct) {
      dispatch(
        productActions.updateProduct(
          prodId,
          formState.inputValues.title,
          formState.inputValues.description,
          formState.inputValues.imageUrl
        )
      );
    } else {
      dispatch(
        productActions.createProduct(
          formState.inputValues.title,
          formState.inputValues.description,
          formState.inputValues.imageUrl,
          +formState.inputValues.price //'+' converts it into a number
        )
      );
    }
    props.navigation.goBack();
  }, [dispatch, prodId, formState]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      // let isValid = false;
      // if (text.trim().length > 0) {
      //   isValid = true;
      // }
      dispatchFormState({
        type: FORM_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={250}>
      <ScrollView>
        <View style={styles.formStyle}>
          <Input
            id="title"
            label="Title"
            errorText="Error in Title ! Try a valid Title."
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            onInputChange={inputChangeHandler}
            initialValue={editedProduct ? editedProduct.title : ""}
            initiallyValid={!!editedProduct}
            required
          />
          <Input
            id="imageUrl"
            label="Image Url"
            errorText="Error in Image Url ! Try a valid Image Url."
            onInputChange={inputChangeHandler}
            keyboardType="default"
            initialValue={editedProduct ? editedProduct.imageUrl : ""}
            initiallyValid={!!editedProduct}
            required
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.formStyle}>
            <Input
              id="price"
              label="Price"
              onInputChange={inputChangeHandler}
              errorText="Error in Price ! Try a valid Price."
              keyboardType="decimal-pad"
              required
              min={0.01}
            />
          </View>
        )}
        <View style={styles.formStyle}>
          <Input
            id="description"
            label="Description"
            onInputChange={inputChangeHandler}
            errorText="Error in Description ! Try a valid Description."
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            multiline
            numberOfLines={4}
            initialValue={editedProduct ? editedProduct.description : ""}
            initiallyValid={!!editedProduct}
            required
            minLength={5}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

EditProductScreen.navigationOptions = (navData) => {
  const submitFn = navData.navigation.getParam("submit");

  return {
    headerTitle: navData.navigation.getParam("productId")
      ? "Edit Product Mode"
      : "Add New Product",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item title="Save" iconName="ios-checkmark" onPress={submitFn} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  formStyle: {
    paddingVertical: 1,
  },
});

export default EditProductScreen;
