import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "98%",
    borderWidth: 1.5,
    borderRadius: 25,
    alignItems: "center",
    margin: 3,
    backgroundColor: "#FFF",
  },

  header: {
    width: "90%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 15,
  },

  conteudo: {
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
  },

  border: {
    width: "85%",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    marginVertical: 10,
  },

  footer: {
    width: "90%",
    paddingTop: 15,
  },
});

export default styles;
