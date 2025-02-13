import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { colors } from "@/components/theme";

const { width } = Dimensions.get("window");
const Productdetails = () => {
  const [isActice, setIsactive] = useState(0);
  let data = [
    {
      price: 19.99,
      name: "Puma Running Shoes",
      size: [40, 41, 42, 43, 44, 45],
      desription:
        "Designed for comfort and built for speed, PUMA running shoes for men provide the ultimate in traction, grip and cushion.",
    },
  ];

  const images = [
    { id: 1, source: require("../assets/images/shoes.png") },
    { id: 2, source: require("../assets/images/bag.png") },
    { id: 3, source: require("../assets/images/bag.png") },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <Ionicons name="chevron-back" size={24} onPress={() => router.back()} />
        <AntDesign name="heart" size={24} />
      </View>

      {/* Swiper Component */}
      <View style={styles.ImageBox}>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          dotColor="rgba(0, 0, 0, 0.12)"
          activeDotColor={colors.buttonColor}
          paginationStyle={styles.pagination}
        >
          {images.map((item) => (
            <View key={item.id} style={styles.slide}>
              <Image source={item.source} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>

      {/* Product Details */}
      <View style={styles.details}>
        {data.map((item, idx) => {
          return (
            <View key={idx}>
              <View style={styles.flex}>
                <Text style={styles.textbold}>Description</Text>
                <Text style={styles.text}>${item.price}</Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.textbold,
                    { fontWeight: "bold", fontSize: 25 },
                  ]}
                >
                  {item.name}
                </Text>
                <Text style={{ marginTop: 8, fontSize: 14 }}>
                  {item.desription}
                </Text>
                <Text style={{ fontSize: 14 }}>See more</Text>
              </View>

              <View style={styles.sizeBox}>
                <Text style={{ fontSize: 17 }}>Choose Size</Text>
                <View style={styles.sizeContainer}>
                  {item.size.map((e, idx) => {
                    var chosen = idx === isActice;
                    return (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setIsactive(idx)}
                        key={idx}
                        style={[
                          styles.item,
                          {
                            backgroundColor: chosen
                              ? colors.buttonColor
                              : "#FAFAFA",
                          },
                        ]}
                      >
                        <Text
                          style={{
                            color: chosen ? "white" : "black",
                            fontWeight: "bold",
                          }}
                        >
                          {e}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </View>
          );
        })}
        <View style={styles.buttonBox}>
          <View style={styles.singleicon}>
            <AntDesign name="shoppingcart" size={25} />
          </View>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.8}
            onPress={() => router.push("/cart")}
          >
            <Text style={{ color: "white", fontSize: 15 }}>Check Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Productdetails;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  details: {
    width: "88%",
    height: "47%",
    justifyContent: "flex-end",
  },
  textbold: {
    fontSize: 20,
    fontWeight: "300",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
  flex: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  sizeBox: {
    marginTop: 40,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  item: {
    padding: 14,
    borderRadius: 8,
  },
  ImageBox: {
    height: "50%",
    width: "100%",
    backgroundColor: colors.shade,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "86%",
    position: "absolute",
    top: 40,
  },
  buttonBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  singleicon: {
    height: 50,
    borderWidth: 2,
    borderColor: "#D3D3D3",
    width: "16%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btn: {
    width: "80%",
    height: 55,
    backgroundColor: colors.buttonColor,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    height: 200,
    width: width - 40,
    borderRadius: 10,
    overflow: "hidden",
  },
  slide: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  pagination: {
    bottom: 10,
  },
});
