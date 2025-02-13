import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Input from "@/components/input";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import Line from "@/components/line";
import CustomButton from "@/components/CustomButton";

const Paymentmethod = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.main2}>
      <View style={styles.main}>
        <View style={styles.innercontainer}>
          <Ionicons
            name="chevron-back"
            size={26}
            onPress={() => router.back()}
          />
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Check Out</Text>
          <MaterialIcons name="delete" size={24} />
        </View>
        <Line box2={true} box3={true} line1={true} line2={true} />
        <Text style={styles.text}>Payment method</Text>
        <TouchableOpacity activeOpacity={0.6} style={styles.iconBox}>
          <FontAwesome name="cc-stripe" size={18} />
          <Text style={styles.bold}>Pay with Stripe</Text>
        </TouchableOpacity>
        <View style={styles.box}>
          <View>
            <Text style={styles.bold}>Card Number</Text>
            <Input width={90} label="12345*" />
          </View>
        </View>
        <View style={styles.box}>
          <View>
            <Text style={styles.bold}>Name of Card</Text>
            <Input width={90} label=" Name*" />
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.box}>
            <View>
              <Text style={styles.bold}>Expire date</Text>
              <Input width={44} label="DD/MM/YYYY*" />
            </View>
            <View>
              <Text style={styles.bold}>CVV</Text>
              <Input width={44} label="3242*" />
            </View>
          </View>

          <CustomButton path="" text="Pay $10" marginTopvalue={15} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Paymentmethod;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  main2: {
    width: "100%",
    backgroundColor: "white",
  },
  innercontainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  content: {
    width: "90%",
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "center",
    gap: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 10,
  },

  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 8,
    marginTop: 2,
  },
  bold: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  addressBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  innerBox: {
    height: 35,
    width: 85,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
    marginBottom: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
