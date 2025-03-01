import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors } from "@/components/theme";

const Myreviews = () => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  let data = [
    {
      name: "Puma",
      date: "1 Month ago",
      like: 1,
      comment: 0,
      content: "no content",
    },
    {
      name: "Puma",
      date: "1 Month ago",
      like: 1,
      comment: 0,
      content: "no content",
    },
    {
      name: "Puma",
      date: "1 Month ago",
      like: 1,
      comment: 0,
      content: "no content",
    },
    {
      name: "Puma",
      date: "1 Month ago",
      like: 1,
      comment: 0,
      content: "no content",
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
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>My reviews</Text>
        </View>
        <View style={styles.main2}>
          <View style={[styles.firstBox, { width: screenWidth * 0.9 }]}>
            <View style={styles.radius}></View>
            <View style={styles.box}>
              <Text style={styles.bold}>2</Text>
              <Text>All reviews</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.bold}>2</Text>
              <Text>Buyer Shows</Text>
            </View>
          </View>
          {data.map((item, idx) => {
            return (
              <View>
                <View
                  style={[styles.boxes, { width: screenWidth * 0.9 }]}
                  key={idx}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "center",
                    }}
                  >
                    <View style={styles.imageBox}>
                      <Image
                        source={require("../assets/images/bag.png")}
                        style={{ height: 35, width: 35, resizeMode: "contain" }}
                      />
                    </View>
                    <View>
                      <Text>{item.name}</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    marginTop: 20,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 6,
                      marginBottom: 6,
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
                    <Text style={styles.bold}>Good</Text>
                  </View>
                </View>
                <View>
                  <Text>{item.content}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    marginTop: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <View style={styles.flex}>
                    <Text style={styles.bold}>{item.date} </Text>
                    <Text style={styles.bold}>{item.like} like </Text>
                    <Text style={styles.bold}>{item.comment} Comment </Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={[
                      styles.flex,
                      {
                        justifyContent: "center",
                        backgroundColor: colors.buttonColor,
                        width: 90,
                        height: 25,
                        borderRadius: 5,
                      },
                    ]}
                  >
                    <Text style={{ color: "white" }}>Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  box: {
    alignItems: "center",
  },
  imageBox: {
    padding: 2,
    borderRadius: 8,
    backgroundColor: "lightgray",
    height: 35,
    width: 35,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 20,
  },
  boxes: {
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: colors.shade,
    height: 50,
    justifyContent: "center",
    padding: 10,
    marginBottom: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  radius: {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: "lightgray",
  },
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  main2: {
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
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
  firstBox: {
    height: 50,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
export default Myreviews;
