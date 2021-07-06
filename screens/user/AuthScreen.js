import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Button,
  KeyboardAvoidingView,
} from "react-native";

import Input from "../../components/UI/Input";
import Colors from "../../constants/Colors";

const AuthScreen = (props) => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={75}
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
            initialValue=""
          />
          <View style={styles.btnContainer}>
            <View style={styles.btnStyle}>
              <Button
                title="Login"
                color={Colors.btnSecondary}
                onPress={() => {}}
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
