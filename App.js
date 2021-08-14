import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./src/components/Header";
import StartGameScreen from "./src/pages/StartGameScreen";
import GameScreen from "./src/pages/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen />;
  if (userNumber) {
    <GameScreen />;
  }

  return (
    <View style={styles.container}>
      <Header title="Adivinhe um número" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
