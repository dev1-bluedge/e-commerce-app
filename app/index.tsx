import { Image, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  withDelay,
  Easing,
} from "react-native-reanimated";
import { router } from "expo-router";

const Index = () => {
  const padding1 = useSharedValue(0);
  const padding2 = useSharedValue(0);

  useEffect(() => {
    padding1.value = withDelay(
      100,
      withTiming(30, { duration: 300, easing: Easing.ease })
    );
    padding2.value = withDelay(
      200,
      withTiming(25, { duration: 400, easing: Easing.ease })
    );
    setTimeout(() => router.push("/signup"), 1000);
  }, []);

  return (
    <View style={styles.main}>
      <Animated.View
        style={{
          padding: padding1,
          backgroundColor: "#080808",
          borderRadius: 150,
        }}
      >
        <Animated.View
          style={{
            padding: padding2,
            backgroundColor: "#4A4A4A",
            borderRadius: 150,
          }}
        >
          <Image
            source={require("../assets/images/images.jpeg")}
            style={{ width: 180, height: 180, borderRadius: 150 }}
            resizeMode="cover"
          />
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
