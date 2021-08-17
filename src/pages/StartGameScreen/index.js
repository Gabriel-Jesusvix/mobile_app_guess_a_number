import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../../components/Card";
import Input from "../../components/Input";
import NumberContainer from "../../components/NumberContainer";

import Colors from "../../constants/color";
import styles from "./styles";

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  let confirmedOutput;

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Número Invalido!",
        "Por favor, digite um número entre 1 e 99.",
        [
          {
            text: "Ok!",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Você Selecionou:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="COMEÇAR JOGO"
          onPress={() => onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar um novo jogo!</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.selectedNumberText}>Selecione um numero </Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Resetar"
                onPress={resetInputHandler}
                color={Colors.primary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirmar"
                onPress={confirmInputHandler}
                color={Colors.secondary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
