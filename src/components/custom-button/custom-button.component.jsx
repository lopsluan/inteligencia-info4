import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import styles from "./custom-button.style";

const CustomButton = ({ text, handlePress, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={style ? style : styles.button}
      onPress={handlePress}
    >
      <View>
        <Text style={textStyle ? textStyle : styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
