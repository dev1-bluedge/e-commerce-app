import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import {
  AntDesign,
  Entypo,
  FontAwesome6,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { colors } from "@/components/theme";

const Cart = () => {
  let data = [
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      quantity: 2,
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      quantity: 2,
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      quantity: 2,
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      quantity: 2,
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      quantity: 2,
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      quantity: 2,
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      quantity: 2,
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      quantity: 2,
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      quantity: 2,
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      quantity: 2,
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
  ];
  let Total = data.reduce((a, b) => a + b.price, 0);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        paddingBottom: 10,
      }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.innercontainer}>
            <Ionicons
              name="chevron-back"
              size={26}
              onPress={() => router.back()}
            />
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Cart</Text>
            <MaterialIcons name="delete" size={24} />
          </View>
          <View style={styles.listcontainer}>
            {data.map((item, idx) => {
              return (
                <View style={styles.item} key={idx}>
                  <View style={styles.Inneritem}>
                    <View style={styles.imageBox}>
                      <Image
                        source={require("../../assets/images/bag.png")}
                        style={{ height: 60, width: 70, resizeMode: "contain" }}
                      />
                    </View>
                    <View>
                      <Text style={{ color: "gray" }}>{item.name}</Text>
                      <Text style={{ fontWeight: "bold", marginTop: 1 }}>
                        ${item.price}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.btnBox}>
                    <View style={styles.button}>
                      <AntDesign name="minus" size={17} color={"white"} />
                    </View>
                    <Text>{item.quantity}</Text>
                    <View style={styles.button}>
                      <AntDesign name="plus" size={17} color={"white"} />
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.totalmain}>
        <View style={styles.totalsection}>
          <View>
            <Text>Total</Text>
            <Text style={[styles.bold, { fontSize: 25 }]}>$ {Total}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.customBtn}
            onPress={() => router.push("/summary")}
          >
            <Text style={{ color: "white" }}>Check Out</Text>
            <FontAwesome6 name="arrow-right-long" color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
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
  listcontainer: {
    width: "90%",
    paddingBottom: 20,
    paddingTop: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  Inneritem: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  imageBox: {
    padding: 2,
    borderRadius: 15,
    backgroundColor: colors.shade,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  btnBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  button: {
    padding: 2,
    borderRadius: 20,
    backgroundColor: "#D3D3D3",
  },
  totalsection: {
    padding: 15,
    width: "90%",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.borderColor,
    alignItems: "center",
    justifyContent: "space-between",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 20,
  },
  customBtn: {
    flexDirection: "row",
    height: 40,
    borderRadius: 20,
    width: 120,
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    backgroundColor: colors.buttonColor,
  },
  totalmain: {
    width: "100%",
    alignItems: "center",
  },
});
