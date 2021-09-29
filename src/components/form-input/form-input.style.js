import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },

  label: {
    backgroundColor: "#FFF",
    width: "75%",
    paddingHorizontal: 5,
    fontSize: 15,
  },

  input: {
    backgroundColor: "#FFF",
    width: "75%",
    height: 35,
    paddingHorizontal: 5,
  },

  errorMessage: {
    width: "75%",
    color: "#F55",
  },
});

export default styles;
