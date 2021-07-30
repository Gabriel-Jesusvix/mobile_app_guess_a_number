import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./src/components/Header";
import StartGameScreen from "./src/pages/StartGameScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Adivinhe um número" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
