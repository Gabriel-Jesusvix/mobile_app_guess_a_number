import React from "react";
import { View, Text, Button, Image } from "react-native";
import styles from "./styles";

const GameOverScreen = ({ roundsNumber, numberUser, onRestart }) => {
  return (
    <View style={styles.container}>
      <Text>O jogo acabou !</Text>
      <Image source={require("../../../assets/success.png")} />
      <Text>Número de rodadas: {roundsNumber}</Text>
      <Text>Número era: {numberUser}</Text>
      <Button title="Novo jogo" onPress={onRestart} />
    </View>
  );
};

export default GameOverScreen;
