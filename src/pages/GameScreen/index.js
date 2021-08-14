import React, { useState } from "react";
import { View, Text, Button } from "react-native";

import NumberContainer from "../../components/NumberContainer";
import Card from "../../components/Card";
import styles from "./styles";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};
const GameScreen = ({ userChoice }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  return (
    <View style={styles.container}>
      <Text>Adivinhação do oponente </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="DIMINUIR" onPress={() => {}} />
        <Button title="AUMENTAR" onPress={() => {}} />
      </Card>
    </View>
  );
};

export default GameScreen;
