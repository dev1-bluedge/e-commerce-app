import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { AntDesign, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import Input from "@/components/input";
import { router } from "expo-router";
import { TextInput } from "react-native-paper";
import Checkbox from "expo-checkbox";
import CustomButton from "@/components/CustomButton";
import Svg, { Path } from "react-native-svg";

const Login = () => {
  const [isChecked, setChecked] = useState(true);
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "white" }}
    >
      <View style={[styles.main, { height: screenHeight * 1 }]}>
        <View style={{ width: screenWidth * 0.9 }}>
          <StatusBar style="dark" />
          <View style={styles.iconBox}>
            <Svg
              viewBox="0 0 16 16"
              fill="black"
              className="size-4"
              width={30}
              height={30}
            >
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z"
              />
            </Svg>
          </View>
          <View>
            <Text style={styles.heading}>Log in</Text>
          </View>
          <View style={styles.mainBox}>
            <View>
              <Text style={styles.bold}>Email address</Text>
              <Input width={90} label=" Email*" />
            </View>

            <View style={styles.box}>
              <Text style={styles.bold}>Password</Text>
              <View style={[styles.container, { width: screenWidth * 0.9 }]}>
                <TextInput
                  label={"Password"}
                  style={styles.input}
                  selectionColor="white"
                  mode="outlined"
                  activeOutlineColor="black"
                  right={<TextInput.Icon icon="eye" />}
                />
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.paragraph}>Forgot password?</Text>
            </View>
            <View style={{ width: screenWidth * 0.9 }}>
              <CustomButton
                path="forgot-password"
                text="login"
                marginTopvalue={15}
                width={screenWidth * 0.9}
              />
            </View>
            <View
              style={{
                width: screenWidth * 0.9,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <View style={[styles.line, { width: screenWidth * 0.25 }]}></View>
              <Text style={[styles.paragraph, { color: "gray" }]}>
                Or register with
              </Text>
              <View style={[styles.line, { width: screenWidth * 0.25 }]}></View>
            </View>
            <View
              style={{
                width: screenWidth * 0.9,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                style={[
                  styles.innerBox,
                  { width: screenWidth * 0.24, height: screenHeight * 0.07 },
                ]}
              >
                <FontAwesome name="facebook" size={25} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.innerBox,
                  { width: screenWidth * 0.24, height: screenHeight * 0.07 },
                ]}
              >
                <AntDesign name="google" size={25} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.innerBox,
                  { width: screenWidth * 0.24, height: screenHeight * 0.07 },
                ]}
              >
                <AntDesign name="apple1" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          activeOpacity={0.6}
          onPress={() => router.push("/")}
        >
          <Text style={styles.paragraph}>Already have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  line: {
    borderBottomWidth: 2,
    borderColor: "gray",
  },
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 4,
    justifyContent: "space-between",
  },
  iconBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 40,
  },
  image: {
    width: 100,
    height: 100,
  },
  heading: {
    fontSize: 27,
    fontWeight: "bold",
    marginTop: 30,
  },
  box: {
    flexDirection: "column",
    gap: 2,
    justifyContent: "center",
  },
  mainBox: {
    flexDirection: "column",
    gap: 10,
    marginTop: 35,
    justifyContent: "center",
  },
  bold: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "white",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  section: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  paragraph: {
    fontSize: 15,
    fontWeight: "bold",
  },
  checkbox: {
    marginRight: 10,
  },
  innerBox: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
});
