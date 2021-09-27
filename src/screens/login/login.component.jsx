import React from "react";
import { View, Text, Image, StyleSheet, CheckBox } from "react-native";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import Logo from "../../../assets/Logo.png";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <View style={styles.form}>
        <FormInput label="Login:" />
        <FormInput label="Senha:" type="password" />
        <CustomButton text="Entrar" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
  },

  logo: {
    maxWidth: "60%",
    resizeMode: "center",
  },

  form: {
    width: "100%",
    alignItems: "center",
  },
});
