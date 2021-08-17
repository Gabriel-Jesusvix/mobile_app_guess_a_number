import { StyleSheet } from "react-native";
import Colors from "../../constants/color";

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default styles;
