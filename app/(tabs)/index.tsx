import {
  Image,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { AntDesign, Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { colors } from "@/components/theme";
const Index = () => {
  const { width: screenWidth } = useWindowDimensions();
  let arr = [
    {
      name: "Puma Sneakers",
      price: 321,
      image: "require(`../../assets/images/bag.png`)",
    },
    {
      name: "Puma Sneakers",
      price: 321,
      image: "bag.png",
    },
    {
      name: "Puma Sneakers",
      price: 321,
      image: "bag.png",
    },
    {
      name: "Puma Sneakers",
      price: 321,
      image: "bag.png",
    },
    {
      name: "Puma Sneakers",
      price: 321,
      image: "bag.png",
    },
    {
      name: "Puma Sneakers",
      price: 321,
      image: "bag.png",
    },
    {
      name: "Puma Sneakers",
      price: 321,
      image: "bag.png",
    },
    {
      name: "Puma Sneakers",
      price: 321,
      image: "bag.png",
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <SafeAreaView>
          <View style={{ ...styles.innerBox, width: screenWidth * 0.83 }}>
            <View style={styles.textarea}>
              <View>
                <Text style={styles.text}>Hello, Naufal</Text>
                <Text style={styles.textbold}>Welcome Back!</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.4}
                style={{ marginBottom: 4, position: "relative" }}
              >
                <AntDesign name="shoppingcart" size={26} />
                <View style={styles.CartLenghtBox}>
                  <Text style={styles.CartLenght}>1</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ ...styles.searchBox, width: screenWidth * 0.85 }}>
            <View style={{ ...styles.Box, width: screenWidth * 0.7 }}>
              <Entypo name="magnifying-glass" size={22} color={"#D3D3D3"} />
              <TextInput placeholder="Why do you need" style={styles.input} />
            </View>
            <View style={styles.iconBox}>
              <Ionicons name="filter-sharp" size={24} color={"gray"} />
            </View>
          </View>
          <View style={{ ...styles.catagoryBox, width: screenWidth * 0.86 }}>
            <View style={styles.innerCatagoryBox}>
              <View style={styles.catagoriesBox}>
                <View style={styles.firstBox}>
                  <FontAwesome5 name="fire-alt" size={24} color={"gray"} />
                </View>
                <View>
                  <Text style={[styles.text, { color: "white" }]}>Popular</Text>
                </View>
              </View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
            </View>
          </View>

          <View
            style={{
              ...styles.menu,
              width: screenWidth * 0.86,
            }}
          >
            <FlatList
              showsVerticalScrollIndicator={false}
              data={arr}
              numColumns={2}
              scrollEnabled={false}
              contentContainerStyle={{ gap: 10, marginBottom: 30 }}
              columnWrapperStyle={{
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              renderItem={({ item, index }) => {
                const dynamicHeight = Math.ceil(
                  Math.random() * (300 - 230) + 230
                );
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => router.push("/productdetails")}
                    activeOpacity={0.7}
                    style={[
                      styles.items,
                      {
                        height: dynamicHeight,
                        position: "relative",
                        width: screenWidth * 0.41,
                      },
                    ]}
                  >
                    <Image
                      source={require(`../../assets/images/puma.png`)}
                      style={{
                        height: 25,
                        width: 25,
                        objectFit: "contain",
                        position: "absolute",
                        left: 10,
                        top: 8,
                      }}
                    />
                    <Image
                      source={require(`../../assets/images/bag.png`)}
                      style={{
                        height: "77%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <View style={styles.itemsBox}>
                      <View style={styles.textBox}>
                        <Text>{item.name}</Text>
                        <Text style={[styles.textbold, { fontSize: 14 }]}>
                          ${item.price}
                        </Text>
                      </View>
                      <AntDesign name="heart" size={15} />
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 10,
    backgroundColor: "white",
  },
  innerBox: {
    width: "86%",
  },
  textarea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  textbold: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    color: "gray",
  },
  searchBox: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "72%",
  },
  Box: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#D3D3D3",
    borderRadius: 10,
    gap: 2,
    paddingLeft: 8,
  },
  iconBox: {
    borderRadius: 10,
    padding: 8,
    backgroundColor: colors.primary,
  },
  catagoryBox: {
    width: "86%",
    marginTop: 30,
    flexDirection: "row",
  },
  innerCatagoryBox: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },

  catagoriesBox: {
    width: 140,
    height: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 6,
    backgroundColor: colors.primary,
    borderRadius: 30,
    flexDirection: "row",
  },
  firstBox: {
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
    width: 34,
    height: 34,
    borderRadius: 30,
    backgroundColor: "white",
  },
  box: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: "#D3D3D3",
  },
  menu: {
    width: "86%",
    marginTop: 20,
  },
  items: {
    borderRadius: 20,
    backgroundColor: colors.shade,
  },
  textBox: {
    flexDirection: "column",
    gap: 4,
  },
  itemsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },
  CartLenghtBox: {
    height: 15,
    width: 15,
    borderRadius: 10,
    backgroundColor: colors.primary,
    position: "absolute",
    top: -4,
    right: -5,
    justifyContent: "center",
    alignItems: "center",
  },
  CartLenght: {
    color: "white",
    fontSize: 10,
  },
});
