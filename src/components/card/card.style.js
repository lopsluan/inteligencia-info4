import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "98%",
    borderWidth: 1.5,
    borderRadius: 25,
    alignItems: "center",
    margin: 3,
    backgroundColor: "#FFF",
    borderColor: "#999999",
  },

  header: {
    width: "90%",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingVertical: 10,
  },

  title: {
    maxWidth: "95%",
  },

  conteudo: {
    width: "85%",
    alignItems: "center",
    padding: 10,
  },

  border: {
    width: "85%",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderColor: "#999999",
  },

  footer: {
    width: "90%",
    paddingVertical: 10,
  },
  img: {
    resizeMode: "stretch",
    minHeight: 200,
    minWidth: "100%",
  },
});

export default styles;
