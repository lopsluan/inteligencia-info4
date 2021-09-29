import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NativeRouter } from "react-router-native";

import Routes from "./src/routes/routes";

export default function App() {
  return (
    <NativeRouter>
      <StatusBar hidden />
      <Routes />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
});
