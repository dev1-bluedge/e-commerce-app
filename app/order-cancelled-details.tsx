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
import Svg, { Path, Rect } from "react-native-svg";
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
    soldBBy: "PUMA",
    Amount: 22.26,
    cancellationdate: "5-FEB-2025, 5:00 PM",
  },
];

const Ordercancelleddetails = () => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
      <View>
        <View style={styles.header}>
          <View style={[styles.innercontainer, { width: screenWidth * 0.7 }]}>
            <Ionicons
              name="chevron-back"
              size={26}
              onPress={() => router.back()}
              color={"black"}
            />
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Cancellation
            </Text>
          </View>
        </View>
        <View style={[styles.box, { height: screenHeight * 0.26 }]}>
          <View style={[styles.innerBox, { width: screenWidth * 0.87 }]}>
            <View style={{ width: screenWidth * 0.58 }}>
              <Text style={styles.text}>Order</Text>
              <Text style={[styles.text, { marginBottom: 10 }]}>
                Cancellation
              </Text>
              <Text style={styles.textColor}>
                Your order has been Cancelled,
              </Text>
              <Text style={styles.textColor}>Thank you for choosing</Text>
            </View>
            <View style={styles.whiteBox}>
              <Svg viewBox="0 0 20 20" height={25} width={25}>
                <Rect width="20" height="20" fill="red" rx="10" />
                <Path
                  fill="white"
                  fillRule="evenodd"
                  d="M8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                  clipRule="evenodd"
                />
              </Svg>
              <View style={{ marginTop: 6 }}>
                <View style={styles.borderline}></View>
                <View style={styles.borderline}></View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.summary]}>
          <View style={[styles.listcontainer, { width: screenWidth * 0.9 }]}>
            <View
              style={[styles.canceldetail, { height: screenHeight * 0.08 }]}
            >
              <View style={[styles.detail, { width: screenWidth * 0.9 }]}>
                <View>
                  <Text style={styles.textlight}>Cancelled by</Text>
                </View>
                <View>
                  <Text>Buyer</Text>
                </View>
              </View>
              <View
                style={[
                  styles.detail,
                  { width: screenWidth * 0.9, marginTop: 5 },
                ]}
              >
                <View>
                  <Text style={styles.textlight}>Reason</Text>
                </View>
                <View>
                  <Text>Decided for alternative products</Text>
                </View>
              </View>
            </View>
            <Text style={[styles.textsmall, { fontSize: 13, marginTop: 6 }]}>
              Cancellation
            </Text>
            <View>
              {orderItems.map((item, idx) => {
                return (
                  <View style={styles.item} key={idx}>
                    <View style={styles.Inneritem}>
                      <View style={styles.imageBox}>
                        <Image
                          source={require("../assets/images/bag.png")}
                          style={{
                            height: 47,
                            width: 47,
                            resizeMode: "contain",
                          }}
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
                  </View>
                );
              })}
            </View>
            {data.map((item, idx) => {
              return (
                <View style={{ width: screenWidth * 0.9 }} key={idx}>
                  <View
                    style={[
                      styles.canceldetail,
                      { height: screenHeight * 0.2 },
                    ]}
                  >
                    <View style={[styles.detail, { width: screenWidth * 0.9 }]}>
                      <View>
                        <Text style={styles.textsmall}>Item price</Text>
                      </View>
                      <View>
                        <Text style={styles.textsmall}>${item.Amount}</Text>
                      </View>
                    </View>
                    <View style={[styles.detail, { width: screenWidth * 0.9 }]}>
                      <View>
                        <Text style={styles.textsmall}>Cancellation date</Text>
                      </View>
                      <View>
                        <Text style={styles.textsmall}>
                          {item.cancellationdate}
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.detail, { width: screenWidth * 0.9 }]}>
                      <View>
                        <Text style={styles.textsmall}>Order no</Text>
                      </View>
                      <View>
                        <Text style={styles.textsmall}>{item.orderID}</Text>
                      </View>
                    </View>
                    <View style={[styles.detail, { width: screenWidth * 0.9 }]}>
                      <View>
                        <Text style={styles.textsmall}>Sold by</Text>
                      </View>
                      <View>
                        <Text style={styles.textsmall}>{item.soldBBy}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
          <CustomButton
            text="Need help?"
            width={screenWidth * 0.9}
            marginTopvalue={0}
            path="/"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Ordercancelleddetails;

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
    backgroundColor: "white",
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
    justifyContent: "space-between",
    marginTop: -20,
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
  canceldetail: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
