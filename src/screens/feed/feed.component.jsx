import React from "react";
import { View, ScrollView } from "react-native";

import Card from "../../components/card/card.component";
import Header from "../../components/header/header.component";

import styles from "./feed.style";

import data from "./data";

const Feed = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        {data.map(({ id, ...data }) => (
          <Card key={id} {...data} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Feed;
