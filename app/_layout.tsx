import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="(tabs)">
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="productdetails" options={{ headerShown: false }} />
        <Stack.Screen name="summary" options={{ headerShown: false }} />
        <Stack.Screen name="deliverymethod" options={{ headerShown: false }} />
        <Stack.Screen name="paymentmethod" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="order-complete" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
        <Stack.Screen name="reset-password" options={{ headerShown: false }} />
        <Stack.Screen name="myorders" options={{ headerShown: false }} />
        <Stack.Screen name="myreviews" options={{ headerShown: false }} />
        <Stack.Screen
          name="code-verification"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="order-cancelled-details"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="order-complete-details"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="order-cancelled" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
