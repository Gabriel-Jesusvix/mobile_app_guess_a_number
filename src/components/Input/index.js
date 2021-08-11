import React from "react";
import { TextInput } from "react-native";

import styles from "./styles";

const Input = ({ style, ...rest }) => {
  return <TextInput {...rest} style={{ ...styles.input, ...style }} />;
};

export default Input;
