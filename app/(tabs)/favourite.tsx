import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors } from "@/components/theme";

const Favourite = () => {
  let data = [
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
  ];

  return (
    <ScrollView style={{ height: "100%", backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.innercontainer}>
          <Ionicons
            name="chevron-back"
            size={26}
            onPress={() => router.back()}
          />
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Wish List</Text>
          <AntDesign name="heart" size={24} />
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
                    <Text>{item.name}</Text>
                    <Text style={{ fontWeight: "bold", marginTop: 1 }}>
                      price ${item.price}
                    </Text>
                    <View style={styles.flex}>
                      <Entypo name="star" color={"orange"} />
                      <Text>9</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.btnBox}>
                  <View style={styles.button}>
                    <AntDesign name="shoppingcart" size={20} />
                  </View>
                  <View style={styles.button}>
                    <MaterialIcons name="delete" size={20} />
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

export default Favourite;

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
    paddingTop: 30,
    paddingBottom: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  imageBox: {
    padding: 2,
    borderRadius: 15,
    backgroundColor: colors.shade,
  },
  Inneritem: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  btnBox: {
    flexDirection: "row",
    gap: 5,
  },
  button: {
    padding: 3,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "gray",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
