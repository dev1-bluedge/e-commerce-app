import { StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";

interface LineProps {
  box2: boolean;
  box3: boolean;
  line1: boolean;
  line2: boolean;
}

const Line: React.FC<LineProps> = ({ box2, box3, line1, line2 }) => {
  const { width: screenWidth } = useWindowDimensions(); // Dynamically get screen width

  return (
    <View style={[styles.progress, { width: screenWidth * 0.9 }]}>
      <View style={styles.box}></View>
      <View
        style={[
          styles.line,
          {
            width: screenWidth * 0.37,
            backgroundColor: line1 ? "#1C1C1C" : "lightgray",
          },
        ]}
      />
      <View
        style={[
          styles.box,
          { backgroundColor: box2 ? "#1C1C1C" : "lightgray" },
        ]}
      />
      <View
        style={[
          styles.line,
          {
            width: screenWidth * 0.37,
            backgroundColor: line2 ? "#1C1C1C" : "lightgray",
          },
        ]}
      />
      <View
        style={[
          styles.box,
          { backgroundColor: box3 ? "#1C1C1C" : "lightgray" },
        ]}
      />
    </View>
  );
};

export default Line;

const styles = StyleSheet.create({
  progress: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 15,
    width: 15,
    borderRadius: 30,
    backgroundColor: "#1C1C1C",
  },
  line: {
    height: 5,
    backgroundColor: "lightgray",
  },
});
