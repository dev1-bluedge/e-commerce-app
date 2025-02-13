import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

interface InputProps {
  width: number;
  label: string;
}

const Input = ({ width, label }: InputProps) => {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: (screenWidth * width) / 100 }]}>
      <TextInput
        label={label}
        style={styles.input}
        selectionColor="white"
        mode="outlined"
        activeOutlineColor="black"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center", // Centers the input within its parent
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "white",
  },
});
