import React from "react";
import { Text, View, TextInput } from "react-native";

import styles from "./form-input.style";

const FormInput = ({
  label,
  handleChange,
  type,
  value,
  keyboard,
  errorMessage,
  error,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChange={handleChange}
        secureTextEntry={type === "password" ? true : false}
        keyboardType={keyboard === "number" ? "number-pad" : "default"}
      />
      {error ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
    </View>
  );
};

export default FormInput;
