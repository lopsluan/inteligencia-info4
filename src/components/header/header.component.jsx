import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useHistory } from "react-router";

import storage from "../../storage/storage";

import styles from "./header.style";

import info4Logo from "../../../assets/info4-logo.png";

const Header = () => {
  const history = useHistory();

  const handlePress = () => {
    storage.storeData({
      keepConnected: false,
    });
    history.push("/");
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handlePress}>
        <View>
          <Icon name="arrow-back" color="#C4C4C4" size={42} />
        </View>
      </TouchableOpacity>

      <Image source={info4Logo} style={styles.logo} />
    </View>
  );
};

export default Header;
