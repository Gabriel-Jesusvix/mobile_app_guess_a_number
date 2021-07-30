import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import styles from "./styles";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Iniciar um novo! </Text>
      <View>
        <Text>selecione um numero </Text>
        <TextInput />
        <View>
          <Button title="Novo" onPress={() => {}} />
          <Button title="Confirmar" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;
