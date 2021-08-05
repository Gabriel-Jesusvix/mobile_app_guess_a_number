import React, { useState } from "react";
import { View, Text, Button } from "react-native";

import Card from "../../components/Card";
import Input from "../../components/Input";

import Colors from "../../constants/color";
import styles from "./styles";

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar um novo jogo!</Text>
      <Card style={styles.inputContainer}>
        <Text>Selecione um numero </Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyBoardType="numeric"
          maxLength={2}
          value={enteredValue}
          onChangeText={(text) => setEnteredValue(text)}
        />
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
