import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "@/components/CustomButton";

const orderCancelled = () => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const data = [
    {
      orderID: "999012",
      name: "Xpress",
      shiperName: "Naufal Gerald",
      recipientName: "Yanuarsyah Fitrah",
      from: "19800 HawthorneBlvd, Torrance, CA...",
      weight: 1.3,
      to: "3891 Ranchview Dr. Richardson, USA",
      Amount: 18.99,
    },
  ];
  return (
    <View style={styles.main}>
      <LinearGradient colors={["#FF7F7F", "white"]} style={styles.background}>
        <Svg viewBox="0 0 20 20" height={70} width={70}>
          <Rect width="20" height="20" fill="red" rx="10" />
          <Path
            fill="white"
            fillRule="evenodd"
            d="M8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
            clipRule="evenodd"
          />
        </Svg>
        <View style={{ width: screenWidth * 0.85, alignItems: "center" }}>
          <Text style={styles.text}>Your order is Cancelled!</Text>
          <Text style={{ textAlign: "center", color: "gray" }}>
            Your order has been Cancelled
          </Text>
        </View>
      </LinearGradient>
      {data.map((item, idx) => {
        return (
          <View style={[styles.box2, { width: screenWidth * 0.89 }]} key={idx}>
            <View style={styles.innerbox}>
              <View>
                <Svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  className="size-6"
                  height={30}
                  width={30}
                >
                  <Path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </Svg>
              </View>
              <View style={styles.innertextbox}>
                <Text style={styles.textlight}>Order ID # {item.orderID}</Text>
                <Text style={styles.textsmall}>{item.name}</Text>
              </View>
            </View>
            <View style={[styles.shipbox, { height: screenHeight * 0.27 }]}>
              <View style={[styles.detail, { width: screenWidth * 0.8 }]}>
                <View style={{ width: screenWidth * 0.32 }}>
                  <Text style={styles.textlight}>Shiper Name</Text>
                  <Text style={styles.textsmall}>{item.shiperName}</Text>
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
                  <Text style={styles.textlight}>Amount</Text>
                  <Text style={styles.textsmall}>{item.Amount} kg</Text>
                </View>
              </View>
            </View>
            <CustomButton
              text="Track your order"
              width={screenWidth * 0.88}
              marginTopvalue={30}
              path="/order-cancelled-details"
            />
          </View>
        );
      })}
    </View>
  );
};

export default orderCancelled;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  background: {
    height: 380,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 4,
  },
  box2: {},
  innerbox: {
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
  },
  innertextbox: {},
  textlight: {
    fontSize: 13,
  },
  textsmall: {
    fontWeight: "bold",
    fontSize: 12,
  },
  shipbox: {
    paddingVertical: 10,
    marginTop: 25,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "space-around",
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
