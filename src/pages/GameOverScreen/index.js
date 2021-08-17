import React from "react";
import { View, Text, Button, Image } from "react-native";

import ButtonComponent from "../../components/ButtonComponent";

import styles from "./styles";

const GameOverScreen = ({ roundsNumber, numberUser, onRestart }) => {
  return (
    <View style={styles.container}>
      <Text>O jogo acabou !</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text>Número de rodadas: {roundsNumber}</Text>
      <Text>Número era: {numberUser}</Text>
      <View style={styles.newGame}>
        <ButtonComponent onPress={onRestart}>NOVO JOGO</ButtonComponent>
      </View>
    </View>
  );
};

export default GameOverScreen;
