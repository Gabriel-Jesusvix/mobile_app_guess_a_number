import React, { useEffect, useRef, useState } from "react";
import { Alert, FlatList, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ButtonComponent from "../../components/ButtonComponent";
import Card from "../../components/Card";
import NumberContainer from "../../components/NumberContainer";

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
const GameScreen = ({ userChoice, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuess, setPastGuess] = useState([initialGuess]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuess.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Não minta", "Você sabe que isso é errado ... 🤔😛", [
        {
          text: "Desculpe...",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNubmer = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNubmer);
    // setRounds((rounds) => rounds + 1);
    setPastGuess((pastGuess) => [nextNubmer, ...pastGuess]);
  };

  return (
    <View style={styles.container}>
      <Text>Adivinhação do oponente </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <ButtonComponent onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </ButtonComponent>
        <ButtonComponent onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </ButtonComponent>
      </Card>
      <FlatList
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        style={styles.listItem}
        data={pastGuess}
        renderItem={({ index }) => (
          <View style={styles.pastListContainer}>
            <Text>#{pastGuess.length - index}</Text>
            <Text>{currentGuess}</Text>
          </View>
        )}
      />
      {/* <ScrollView>
        {pastGuess.map((guess) => (
          
        ))}
      </ScrollView> */}
    </View>
  );
};

export default GameScreen;
