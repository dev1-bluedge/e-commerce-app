import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import Line from "@/components/line";
import Summarybox from "@/components/summarybox";
import CustomButton from "@/components/CustomButton";
import { colors } from "@/components/theme";

const Summary = () => {
  return (
    <View style={styles.main}>
      <View style={styles.innercontainer}>
        <Ionicons name="chevron-back" size={26} onPress={() => router.back()} />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Check Out</Text>
        <MaterialIcons name="delete" size={24} />
      </View>
      <Line box2={false} box3={false} line1={false} line2={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{ width: "100%", alignItems: "center", paddingBottom: 10 }}
        >
          <Text style={styles.text}>Summary</Text>
          <Summarybox />
          <Summarybox />
          <Summarybox />
          <Summarybox />
          <Summarybox />
          <Summarybox />
        </View>
      </ScrollView>

      <View style={styles.totalBox}>
        <View style={styles.items}>
          <Text>Sub Total</Text>
          <Text style={styles.bold}>$ 81.00</Text>
        </View>
        <View style={styles.items}>
          <Text>Vat (5%)</Text>
          <Text style={styles.bold}>$ 10.00</Text>
        </View>
        <View style={styles.items}>
          <Text style={styles.total}>Total</Text>
          <Text style={[styles.total, { fontWeight: "400", fontSize: 19 }]}>
            $99.00
          </Text>
        </View>

        <CustomButton
          path="deliverymethod"
          text="Continue"
          marginTopvalue={0}
        />
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  innercontainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  text: {
    fontWeight: 400,
    fontSize: 18,
    marginTop: 20,
  },
  totalBox: {
    width: "100%",
    height: 200,
    padding: 30,
    flexDirection: "column",
    gap: 15,
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 12,
  },
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
  },
});
