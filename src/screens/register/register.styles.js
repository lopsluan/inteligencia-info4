import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
  },

  logo: {
    maxWidth: "60%",
    resizeMode: "center",
  },

  form: {
    width: "100%",
    alignItems: "center",
  },

  buttonsContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cancelButton: {
    backgroundColor: "#E5E5E5",
  },
});

export default styles;
