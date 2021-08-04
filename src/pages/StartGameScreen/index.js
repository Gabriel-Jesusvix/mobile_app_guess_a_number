import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import styles from "./styles";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar um novo!</Text>
      <View style={styles.inputContainer}>
        <Text>Selecione um numero </Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Novo" onPress={() => {}} />
          <Button title="Confirmar" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;
