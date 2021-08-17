import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const ButtonComponent = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
