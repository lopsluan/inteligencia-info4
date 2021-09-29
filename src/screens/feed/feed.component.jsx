import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { LinearProgress } from "react-native-elements";

import Card from "../../components/card/card.component";
import Header from "../../components/header/header.component";

import styles from "./feed.style";

import api from "../../services/api.news";

const Feed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.getNews().then((res) => setNews(res.data.data));
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView style={styles.content}>
        {news.length === 0 ? (
          <LinearProgress color="#999" />
        ) : (
          news.map((news) => (
            <Card
              key={news.title}
              title={news.title}
              imageUrl={news.image}
              timeStamp={news.published_at}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Feed;
