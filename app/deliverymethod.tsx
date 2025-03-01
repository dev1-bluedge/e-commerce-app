import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Line from "@/components/line";
import { router } from "expo-router";
import Input from "@/components/input";
import CustomButton from "@/components/CustomButton";
const Deliverymethod = () => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
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
        <Line box2={true} box3={false} line1={true} line2={false} />
        <Text style={styles.text}>Delivery method</Text>
        <View style={styles.content}>
          <View style={styles.box}>
            <View>
              <Text style={styles.bold}>Full Name</Text>
              <Input width={44} label="First Name*" />
            </View>
            <View>
              <Input width={44} label="Last Name*" />
            </View>
          </View>

          <View style={styles.box}>
            <View>
              <Text style={styles.bold}>Address</Text>
              <Input width={90} label="Pincode*" />
              <Input width={90} label="Address*" />
              <View style={styles.box}>
                <View>
                  <Input width={44} label="Post Code Zip*" />
                </View>
                <View>
                  <Input width={44} label="Town*" />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View>
              <Text style={styles.bold}>Country</Text>
              <Input width={90} label="Country Name*" />
            </View>
          </View>
          <View style={styles.box}>
            <View>
              <Text style={styles.bold}>Contact Details</Text>
              <Input width={90} label="Phone No*" />
              <Input width={90} label="Email*" />
            </View>
          </View>
          <View style={styles.box}>
            <View>
              <Text style={styles.bold}>Save Address as</Text>
              <View style={styles.addressBox}>
                <TouchableOpacity activeOpacity={0.7} style={styles.innerBox}>
                  <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.innerBox}>
                  <Text>Work</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.innerBox}>
                  <Text>Other</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <CustomButton
            path="paymentmethod"
            text="Place Order"
            marginTopvalue={15}
            width={screenWidth * 0.9}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Deliverymethod;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  main2: {
    width: "100%",
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
    gap: 5,
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
    marginTop: 2,
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
});
