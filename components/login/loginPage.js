import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../colors";

export function LoginPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("./../../assets/NextStepLogo.png")}
          style={styles.logo}
        ></Image>
      </View>
      <TextInput style={styles.textInput} placeholder="Username"></TextInput>
      <TextInput style={styles.textInput} placeholder="Password"></TextInput>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.forgotText}>Forgot Password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  logo: {
    height: 200,
    width: 300,
  },
  textInput: {
    width: 300,
    height: 50,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 30,
    paddingLeft: 10,
    fontSize: 20,
  },
  loginButton: {
    height: 50,
    width: 125,
    borderRadius: 15,
    marginBottom: 15,
    backgroundColor: COLORS.highlight,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 3,
  },
  registerButton: {
    height: 60,
    width: 325,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: COLORS.highlight,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 3,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 22,
    alignItems: "center",
  },
  forgotText: {
    marginBottom: 100,
    fontSize: 20,
  },
});
