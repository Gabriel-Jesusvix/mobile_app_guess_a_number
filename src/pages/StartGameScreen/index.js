import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import Card from "../../components/Card";

import Colors from "../../constants/color";
import styles from "./styles";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar um novo!</Text>
      <Card style={styles.inputContainer}>
        <Text>Selecione um numero </Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Novo" onPress={() => {}} color={Colors.primary} />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirmar"
              onPress={() => {}}
              color={Colors.secondary}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;
