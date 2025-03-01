import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors } from "@/components/theme";

const Myorders = () => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  let data = [
    {
      orderId: 19992,
      date: "20-JAN-2025",
      time: "3:00 PM",
      deliveryDate: "25 Dec",
    },
    {
      orderId: 19992,
      date: "20-JAN-2025",
      time: "3:00 PM",
      deliveryDate: "25 Dec",
    },
    {
      orderId: 19992,
      date: "20-JAN-2025",
      time: "3:00 PM",
      deliveryDate: "25 Dec",
    },
    {
      orderId: 19992,
      date: "20-JAN-2025",
      time: "3:00 PM",
      deliveryDate: "25 Dec",
    },
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
      <View style={styles.header}>
        <View style={[styles.innercontainer, { width: screenWidth * 0.69 }]}>
          <Ionicons
            name="chevron-back"
            size={26}
            onPress={() => router.back()}
            color={"black"}
          />
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>My Orders</Text>
        </View>
      </View>
      <View style={styles.listcontainer}>
        {data.map((item, idx) => {
          return (
            <View
              style={[styles.item, { width: screenWidth * 0.9 }]}
              key={item.date}
            >
              <View style={styles.textBox}>
                <View>
                  <Text style={styles.bold}>Order#: {item.orderId}</Text>
                  <Text style={{ color: "gray" }}>
                    {item.date}, {item.time}
                  </Text>
                </View>
                <Text style={{ color: "orange", fontWeight: "bold" }}>
                  Delivered on {item.deliveryDate}
                </Text>
              </View>
              <View style={styles.boxSize}>
                <View style={styles.imageBox}>
                  <Image
                    source={require("../assets/images/bag.png")}
                    style={{ height: 60, width: 70, resizeMode: "contain" }}
                  />
                </View>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
                >
                  <Text style={styles.bold}>Rating</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <View>
                        <Entypo
                          name="star"
                          color={"orange"}
                          size={14}
                          key={idx}
                        />
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "white",
    marginBottom: 4,
  },
  innercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  listcontainer: {
    paddingBottom: 20,
    paddingTop: 10,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    marginBottom: 10,
  },
  Inneritem: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageBox: {
    padding: 2,
    borderRadius: 15,
    backgroundColor: colors.shade,
    height: 60,
    width: 70,
  },
  bold: {
    fontWeight: "bold",
  },
  textBox: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  boxSize: {
    flexDirection: "column",
    gap: 2,
    alignItems: "flex-end",
  },
});
export default Myorders;
