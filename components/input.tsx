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
  label?: string;
  height?: number;
}

const Input = ({ width, label, height }: InputProps) => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        {
          width: (screenWidth * width) / 100,
        },
      ]}
    >
      <TextInput
        label={label}
        style={[
          styles.input,
          { height: height ? (screenHeight * height) / 100 : 40 },
        ]}
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
    marginBottom: 10,
    backgroundColor: "white",
  },
});
