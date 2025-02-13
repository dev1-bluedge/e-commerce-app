import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";

const index = () => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  return (
    <View style={styles.main}>
      <View
        style={[
          styles.container,
          { width: screenWidth * 0.9, marginTop: screenHeight * 0.1 },
        ]}
      >
        <View
          style={[
            styles.showCase,
            { height: screenHeight * 0.47, width: screenWidth * 0.9 },
          ]}
        >
          <Image source={require("../assets/images/showcase.png")} />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.textBold}>Find Your</Text>
          <Text style={styles.textBold}>Best Style</Text>
        </View>
        <View style={styles.textBoxes}>
          <Text style={styles.textlight}>
            Join and discover the best style according to your passion
          </Text>
        </View>
        <CustomButton
          path="/(tabs)/"
          text="Get started"
          marginTopvalue={screenHeight * 0.12}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  container: {
    // marginTop: 50,
  },
  showCase: {
    backgroundColor: "#3D3D3D",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textBox: {
    marginTop: 40,
    alignItems: "center",
  },
  textBoxes: {
    alignItems: "center",
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 33,
  },
  textlight: {
    marginTop: 10,
    fontSize: 20,
    textAlign: "center",
  },
});
