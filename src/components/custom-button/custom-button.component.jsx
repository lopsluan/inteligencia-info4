import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import styles from "./custom-button.style";

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
