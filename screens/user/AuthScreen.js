import React, { useReducer, useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { useDispatch } from "react-redux";

import Input from "../../components/UI/Input";
import Colors from "../../constants/Colors";
import * as authActions from "../../store-redux/actions/Auth";

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

const AuthScreen = (props) => {
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const signupHandler = () => {
    dispatch(
      authActions.signup(
        formState.inputValues.email,
        formState.inputValues.password
      )
    );
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
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
    <KeyboardAvoidingView
      // behavior="padding"
      // keyboardVerticalOffset={0}
      style={styles.screen}
    >
      <View style={styles.authContainer}>
        <ScrollView>
          <Input
            id="email"
            label="Email"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="A Valid Email Please.."
            // onChangeText={() => {}}
            onInputChange={inputChangeHandler}
            initialValue=""
          />

          <Input
            id="password"
            label="Password"
            keyboardType="default"
            secureTextEntry
            required
            minLength={5}
            autoCapitalize="none"
            errorText="A Valid Password (5 characters) Please.."
            // onChangeText={() => {}}
            onInputChange={inputChangeHandler}
            initialValue=""
          />
          <View style={styles.btnContainer}>
            <View style={styles.btnStyle}>
              <Button
                title="Login"
                color={Colors.btnSecondary}
                onPress={signupHandler}
              />
            </View>
            <View style={styles.btnStyle}>
              <Button
                title="Switch to sign-up"
                color={Colors.btnPrimary}
                onPress={() => {}}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: "Authentication",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 12,
    backgroundColor: Colors.btnSecondary,
  },
  authContainer: {
    backgroundColor: Colors.blank,
    borderRadius: 15,
    padding: 15,

    // Shadow Style
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { width: 12, height: 11 },
    shadowRadius: 15,
    elevation: 10,
  },
  btnContainer: {
    // flexDirection: "row",
    // justifyContent: "space-around",
    // paddingVertical: 15,
  },
  btnStyle: {
    // paddingHorizontal: 8,
    paddingVertical: 3,
  },
});

export default AuthScreen;
