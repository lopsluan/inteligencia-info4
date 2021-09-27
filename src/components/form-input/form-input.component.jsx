import React from "react";
import { Text, View, TextInput } from "react-native";

import styles from "./form-input.style";

const FormInput = ({ label, onChange, type }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChange={onChange}
        secureTextEntry={type === "password" ? true : false}
      />
    </View>
  );
};

export default FormInput;
