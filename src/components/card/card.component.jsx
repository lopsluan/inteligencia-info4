import React from "react";
import { View, Text, Image } from "react-native";
import { Icon } from "react-native-elements";

import styles from "./card.style";

const Card = ({ title, imageUrl, timeStamp }) => {
  const now = new Date();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        <Icon name="article" color="#C4C4C4" />
      </View>

      <View style={styles.border} />
      <View style={styles.conteudo}>
        {imageUrl ? (
          <Image
            style={styles.img}
            source={{
              uri: imageUrl.replace("\\", "").replace("httpss", "https"),
            }}
          />
        ) : null}
      </View>
      <View style={styles.border} />

      <Text style={styles.footer}>
        {timeStamp.replace("T", " ").replace("+00:00", "")}
      </Text>
    </View>
  );
};

export default Card;
