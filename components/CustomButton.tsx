import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { colors } from "./theme";

interface CustomButtonProps {
  text: string;
  path: string;
  marginTopvalue: number;
  width?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  path,
  marginTopvalue,
  width,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.btns, { marginTop: marginTopvalue || 0, width: width }]}
      onPress={() => router.push(`${path}`)}
    >
      <Text style={[styles.total, { color: "white" }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  total: {
    fontWeight: "bold",
    fontSize: 22,
  },
  btns: {
    backgroundColor: colors.buttonColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginBottom: 4,
  },
});
