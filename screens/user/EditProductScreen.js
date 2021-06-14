import React, { useState, useEffect, useCallback, useReducer } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from 'react-redux';

import MyHeaderButton from "../../components/UI/MyHeaderButton";
import Colors from "../../constants/Colors";
import * as productActions from '../../store-redux/actions/products';

const FORM_UPDATE = 'UPDATE';

const formReducer = (state, action) =>{
  if(action.type === 'UPDATE'){
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };

    const updatedValidites = {
      ...state.inputValidities,
      [action.input]: action.isValid
    }

    let updatedFormIsValid = true;
    for(const element in updatedValidites){
      updatedFormIsValid = updatedFormIsValid && updatedValidites[element]; //if one input is invalid, full form is invalid !
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

  const editedProduct = useSelector(state=>state.products.userCreatedProducts.find(prod=>prod.id===prodId));

  const dispatch = useDispatch()

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues:{
      title: editedProduct ? editedProduct.title : '',
      imageUrl: editedProduct ? editedProduct.imageUrl : '',
      description: editedProduct ? editedProduct.description : '',
      price: ''
    }, 
    inputValidities:{
      title: editedProduct ? true : false,
      imageUrl: editedProduct ? true : false,
      description: editedProduct ? true : false,
      price: editedProduct ? true : false,
    }, 
    formIsValid: editedProduct ? true : false
})

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
  const [titleIsValid, setTitleIsValid] = useState(false);
  const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');


  const submitHandler = useCallback(() =>{ //ensures function re-created every time component renders, to avoid infinite loops
    // console.log("Submit Executed !!");

    //cancel function execution for validity
    if(!formState.formIsValid){
      Alert.alert('Wrong input!', 'Check your inputs and try again.', [{text: 'Ok'}])
      return;
    }

    if(editedProduct){
      dispatch(productActions.updateProduct(prodId, formState.inputValues.title, formState.inputValues.description, formState.inputValues.imageUrl))
    }else{
      dispatch(productActions.createProduct(formState.inputValues.title, formState.inputValues.description, formState.inputValues.imageUrl, +formState.inputValues.price))
    }
    props.navigation.goBack();
  }, [dispatch, prodId, formState]);

  useEffect(()=>{
    props.navigation.setParams({'submit': submitHandler})
  }, [submitHandler])

  const changeTextHandler = (inputIdentifier, text) =>{
    let isValid = false;
    if(text.trim().length > 0){
      isValid=true;
    }
    dispatchFormState({type:FORM_UPDATE, value: text, isValid: isValid, input: inputIdentifier})
  }

  return (
    <ScrollView>
      <View style={styles.formStyle}>
        <Text style={styles.labelStyle}>Edit Title</Text>
        <TextInput keyboardType='default' style={styles.inputStyle} value={formState.inputValues.title} onChangeText={changeTextHandler.bind(this, 'title')} />
        {!formState.inputValidities && <Text>Please enter a valid title !</Text>}
      </View>
      <View style={styles.formStyle}>
        <Text style={styles.labelStyle}>Edit Image Url</Text>
        <TextInput keyboardType='default' style={styles.inputStyle} value={formState.inputValues.imageUrl} onChangeText={changeTextHandler.bind(this, 'imageUrl')} />
      </View>
      {editedProduct ? null : (
        <View style={styles.formStyle}>
          <Text style={styles.labelStyle}>Edit Price</Text>
          <TextInput keyboardType='decimal-pad' style={styles.inputStyle} value={formState.inputValues.price} onChangeText={changeTextHandler.bind(this, 'price')} />
        </View>)}
      <View style={styles.formStyle}>
        <Text style={styles.labelStyle}>Edit Desription</Text>
        <TextInput style={styles.inputStyle} value={formState.inputValues.description} onChangeText={changeTextHandler.bind(this, 'description')} />
      </View>
    </ScrollView>
  );
};

EditProductScreen.navigationOptions = (navData) => {

  const submitFn = navData.navigation.getParam('submit');

  return {
    headerTitle: navData.navigation.getParam("productId")
      ? "Edit Product Mode"
      : "Add New Product",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          title="Save"
          iconName="ios-checkmark"
          onPress={submitFn}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  formStyle: {
    paddingVertical: 11,
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
    fontSize: 18,
  },
});

export default EditProductScreen;
