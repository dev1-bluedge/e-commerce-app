import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Svg, { Path } from "react-native-svg";
import { Image } from "react-native";
import { colors } from "@/components/theme";
import { Button } from "react-native-paper";
import CustomButton from "@/components/CustomButton";
let orderItems = [
  {
    price: 19.99,
    name: "Puma Shoes",
    size: [40, 41, 42, 43, 44, 45],
    quantity: 2,
    desription:
      "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
  },
];
const data = [
  {
    orderID: "999012",
    name: "Xpress",
    recipientName: "Yanuarsyah Fitrah",
    from: "19800 HawthorneBlvd, Torrance, CA...",
    weight: 1.3,
    to: "3891 Ranchview Dr. Richardson, USA",
    CompleteDate: "8-FEB-2025, 5:00 PM",
    gateway: "Easypaisa",
    Amount: 22.26,
    placeOn: "20-JAN-2025, 3:00 PM",
    shipedOn: "4-FEB-2025, 5:00 PM",
    deliveredOn: "5-FEB-2025, 5:00 PM",
    completedOn: "8-FEB-2025, 5:00 PM",
  },
];

const Tracking = () => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
      <View>
        <View style={styles.header}>
          <View style={[styles.innercontainer, { width: screenWidth * 0.69 }]}>
            <Ionicons
              name="chevron-back"
              size={26}
              onPress={() => router.back()}
              color={"black"}
            />
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Completed</Text>
          </View>
        </View>
        <View style={[styles.box, { height: screenHeight * 0.22 }]}>
          <View style={[styles.innerBox, { width: screenWidth * 0.87 }]}>
            <View style={{ width: screenWidth * 0.58 }}>
              <Text style={styles.text}>Order</Text>
              <Text style={[styles.text, { marginBottom: 10 }]}>Completed</Text>
              <Text style={styles.textColor}>
                Your order has been completed,
              </Text>
              <Text style={styles.textColor}>Thank you for choosing</Text>
            </View>
            <View style={styles.whiteBox}>
              <Svg
                viewBox="0 0 24 24"
                fill="#0EAF44"
                className="size-6"
                height={40}
                width={40}
              >
                <Path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd"
                />
              </Svg>
              <View style={styles.borderline}></View>
              <View style={styles.borderline}></View>
            </View>
          </View>
        </View>
        <View style={styles.summary}>
          <View style={[styles.listcontainer, { width: screenWidth * 0.9 }]}>
            <Text style={[styles.textsmall, { fontSize: 18 }]}>
              Order summary
            </Text>
            {orderItems.map((item, idx) => {
              return (
                <View style={styles.item} key={idx}>
                  <View style={styles.Inneritem}>
                    <View style={styles.imageBox}>
                      <Image
                        source={require("../assets/images/bag.png")}
                        style={{ height: 47, width: 47, resizeMode: "contain" }}
                      />
                    </View>
                    <View>
                      <Text style={{ color: "gray" }}>{item.name}</Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          marginTop: 1,
                          fontSize: 12,
                        }}
                      >
                        Good quality
                      </Text>
                    </View>
                  </View>
                  <View style={styles.flexBtn}>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.textgray}>Return/Refund</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.textgray}>Write a review</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
          {data.map((item, idx) => {
            return (
              <View style={{ width: screenWidth * 0.9 }} key={idx}>
                <View style={[styles.shipbox, { height: screenHeight * 0.27 }]}>
                  <View style={[styles.detail, { width: screenWidth * 0.8 }]}>
                    <View style={{ width: screenWidth * 0.32 }}>
                      <Text style={styles.textlight}>Order No</Text>
                      <Text style={styles.textsmall}>{item.orderID}</Text>
                    </View>
                    <View style={{ width: screenWidth * 0.27 }}>
                      <Text style={styles.textlight}>Recipient Name</Text>
                      <Text style={styles.textsmall}>{item.recipientName}</Text>
                    </View>
                  </View>
                  <View style={[styles.detail, { width: screenWidth * 0.8 }]}>
                    <View style={{ width: screenWidth * 0.32 }}>
                      <Text style={styles.textlight}>From</Text>
                      <Text style={styles.textsmall}>{item.from}</Text>
                    </View>
                    <View style={{ width: screenWidth * 0.27 }}>
                      <Text style={styles.textlight}>To</Text>
                      <Text style={styles.textsmall}>{item.to}</Text>
                    </View>
                  </View>
                  <View style={[styles.detail, { width: screenWidth * 0.8 }]}>
                    <View style={{ width: screenWidth * 0.32 }}>
                      <Text style={styles.textlight}>Weight</Text>
                      <Text style={styles.textsmall}>{item.weight} kg</Text>
                    </View>
                    <View style={{ width: screenWidth * 0.27 }}>
                      <Text style={styles.textlight}>Completed on</Text>
                      <Text style={styles.textsmall}>{item.CompleteDate}</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.shipbox, { height: screenHeight * 0.08 }]}>
                  <View style={[styles.detail, { width: screenWidth * 0.8 }]}>
                    <View>
                      <Text style={styles.textlight}>Paid by</Text>
                      <Text style={styles.textsmall}>{item.gateway}</Text>
                    </View>
                    <View>
                      <Text style={styles.textsmall}>${item.Amount}</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.shipbox, { height: screenHeight * 0.2 }]}>
                  <View style={[styles.detail, { width: screenWidth * 0.8 }]}>
                    <View style={{ width: screenWidth * 0.32 }}>
                      <Text style={styles.textlight}>Placed on</Text>
                      <Text style={styles.textsmall}>{item.placeOn} kg</Text>
                    </View>
                    <View style={{ width: screenWidth * 0.27 }}>
                      <Text style={styles.textlight}>Shipped on</Text>
                      <Text style={styles.textsmall}>{item.shipedOn}</Text>
                    </View>
                  </View>
                  <View style={[styles.detail, { width: screenWidth * 0.8 }]}>
                    <View style={{ width: screenWidth * 0.32 }}>
                      <Text style={styles.textlight}>Delivered on</Text>
                      <Text style={styles.textsmall}>{item.deliveredOn}</Text>
                    </View>
                    <View style={{ width: screenWidth * 0.27 }}>
                      <Text style={styles.textlight}>Completed on</Text>
                      <Text style={styles.textsmall}>
                        {item.completedOn} kg
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Tracking;

const styles = StyleSheet.create({
  innercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  main: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  box: {
    alignItems: "center",
    backgroundColor: "lightgray",
    marginTop: 10,
    justifyContent: "center",
  },
  innerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 26,
  },
  whiteBox: {
    height: 80,
    width: 80,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textColor: {
    color: "gray",
  },
  borderline: {
    borderBottomColor: "#000000",
    borderWidth: 2,
    width: 30,
    marginTop: 4,
  },
  summary: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    paddingBottom: 20,
  },
  listcontainer: {
    paddingBottom: 20,
    paddingTop: 10,
  },
  item: {
    paddingTop: 10,
  },
  Inneritem: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  imageBox: {
    padding: 2,
    borderRadius: 10,
    backgroundColor: colors.shade,
  },
  header: {
    backgroundColor: "white",
    marginBottom: 4,
  },
  flexBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    padding: 3,
  },
  textgray: {
    color: "gray",
    fontSize: 10,
  },
  innerbox: {
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
  },
  textlight: {
    fontSize: 13,
  },
  textsmall: {
    fontWeight: "bold",
    fontSize: 12,
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shipbox: {
    paddingVertical: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
