import React from "react";
import { TextInput, TextInputProps } from "react-native";

import styles from "./styles";
/**
 * @param props {TextInputProps}
 */
const Input = ({ style, ...rest }) => {
  return <TextInput {...rest} style={{ ...styles.input, ...style }} />;
};

export default Input;
