import React from "react";
import { View, Text } from "react-native";

import styles from "./card.style";

const Card = ({ title, content, timestamp }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{title.toUpperCase()}</Text>

        <Text>icone</Text>
      </View>

      <View style={styles.border} />
      <View style={styles.conteudo}>
        <Text>{content}</Text>
      </View>
      <View style={styles.border} />

      <Text style={styles.footer}>{timestamp}</Text>
    </View>
  );
};

export default Card;
