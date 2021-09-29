import api from "./api";

const getNews = async () => {
  try {
    const data = await api.get(
      "http://api.mediastack.com/v1/news?access_key=ad2682c32f0af70a7c31fbe31616eed7&limit=3&languages=pt&sources=cnn,bbc,g1"
    );
    return data;
  } catch (e) {
    return e;
  }
};

export default { getNews };
