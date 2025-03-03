import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import Svg, { Path } from "react-native-svg";

const codeVerification = () => {
  const { width: screenWidth } = useWindowDimensions();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "white" }}
    >
      <StatusBar style="dark" />
      <View style={[styles.main]}>
        <View style={{ width: screenWidth * 0.9 }}>
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
            <Text style={styles.heading}>Please check your email</Text>
            <Text style={[styles.bold, { color: "gray", marginTop: 8 }]}>
              We’ve sent a code to your email
            </Text>
          </View>
          <View style={styles.mainBox}>
            <View style={styles.inputs}>
              <View style={[styles.codeInput, { width: screenWidth * 0.2 }]}>
                <TextInput
                  keyboardType="numeric"
                  style={styles.textinput}
                  maxLength={1}
                />
              </View>
              <View style={[styles.codeInput, { width: screenWidth * 0.2 }]}>
                <TextInput
                  keyboardType="numeric"
                  style={styles.textinput}
                  maxLength={1}
                />
              </View>
              <View style={[styles.codeInput, { width: screenWidth * 0.2 }]}>
                <TextInput
                  keyboardType="numeric"
                  style={styles.textinput}
                  maxLength={1}
                />
              </View>
              <View style={[styles.codeInput, { width: screenWidth * 0.2 }]}>
                <TextInput
                  keyboardType="numeric"
                  style={styles.textinput}
                  maxLength={1}
                />
              </View>
            </View>
            <View style={{ width: screenWidth * 0.9 }}>
              <CustomButton
                path="/reset-password"
                text="Verify"
                marginTopvalue={20}
                width={screenWidth * 0.9}
              />
            </View>
            <View style={styles.codeSender}>
              <Text style={styles.bold}>Send code again 0:00</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default codeVerification;

const styles = StyleSheet.create({
  inputs: {
    flexDirection: "row",
    gap: 10,
  },
  textinput: {
    fontSize: 25,
    fontWeight: "bold",
    height: "100%",
    borderRadius: 10,
  },
  codeInput: {
    height: 70,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignSelf: "center",
  },
  codeSender: {
    paddingTop: 22,
    alignItems: "center",
  },
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 4,
  },
  iconBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 40,
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
});
