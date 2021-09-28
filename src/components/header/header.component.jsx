import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import styles from "./header.style";

import info4Logo from "../../../assets/info4-logo.png";

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <View>
          <Icon name="arrow-back" color="#C4C4C4" size={42} />
        </View>
      </TouchableOpacity>

      <Image source={info4Logo} style={styles.logo} />
    </View>
  );
};

export default Header;
