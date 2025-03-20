import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";
const Summarybox = () => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  return (
    <View style={styles.content}>
      <View style={[styles.box, { width: screenWidth * 0.9 }]}>
        <View>
          <Text>Puma Sneakers</Text>
          <Text style={[styles.bold, { marginTop: 5 }]}>
            Ends on 22.02.2025
          </Text>
        </View>
        <View>
          <Text style={styles.bold}>$18.99</Text>
        </View>
      </View>
    </View>
  );
};

export default Summarybox;

const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  content: {
    width: "100%",
    alignItems: "center",
    paddingTop: 15,
  },
  bold: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
