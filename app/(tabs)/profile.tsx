import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { FontAwesome6, Ionicons, Entypo } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";

const Profile = () => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const screens = [
    {
      iconName: "circle-info",
      screenName: "My Orders",
      iconProvider: "FontAwesome6",
      path: "myorders",
    },
    {
      iconName: "star",
      path: "myreviews",
      screenName: "My Reviews",
      iconProvider: "Entypo",
    },
    {
      iconName: "user-large",
      screenName: "Account information",
    },
    {
      iconName: "money-check",
      screenName: "Payment Setting",
    },
    {
      iconName: "address-card",
      screenName: "Address Book",
    },
    {
      iconName: "folder-minus",
      screenName: "Request account Deletion",
    },
    {
      iconName: "pen-clip",
      screenName: "Feedback",
    },
  ];

  return (
    <View style={styles.main}>
      <View style={[styles.box, { height: screenHeight * 0.32 }]}>
        <View style={[styles.innercontainer, { width: screenWidth * 0.62 }]}>
          <Ionicons
            name="chevron-back"
            size={26}
            onPress={() => router.back()}
            color={"white"}
          />
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            Profile
          </Text>
        </View>
        <View style={[styles.imageBox, { left: screenWidth * 0.33 }]}>
          <Image
            source={{
              uri: "https://www.shutterstock.com/image-photo/happy-handsome-caucasian-man-casual-260nw-2378378987.jpg",
            }}
            style={styles.Image}
          />
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.bold}>John else</Text>
        <Text style={{ textAlign: "center" }}>john@gmail.com</Text>
      </View>
      <View style={[styles.screens, { width: screenWidth * 0.9 }]}>
        {screens.map((item, idx) => {
          return (
            <TouchableOpacity
              onPress={() => item.path && router.push(`/${item.path}` as any)}
              style={styles.boxes}
              key={idx}
              activeOpacity={0.5}
            >
              <View style={styles.Iconbox}>
                <FontAwesome6 name={item.iconName} color={"black"} size={16} />
              </View>
              <Text style={styles.text}>{item.screenName}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <CustomButton
        path="/"
        text="Log out"
        marginTopvalue={15}
        width={screenWidth * 0.9}
      />
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  innercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 5,
  },
  text: {
    fontWeight: "bold",
  },
  screens: {
    flexDirection: "column",
    gap: 15,
    paddingTop: 30,
  },
  boxes: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  box: {
    backgroundColor: "black",
    width: "100%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: "relative",
  },
  imageBox: {
    borderWidth: 2,
    borderColor: "#D9D9D9",
    padding: 2,
    borderRadius: "50%",
    height: 120,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -35,
  },
  Image: {
    borderRadius: 50,
    height: 105,
    width: 105,
  },
  info: {
    paddingTop: 40,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  Iconbox: {
    backgroundColor: "#D9D9D9",
    padding: 6,
    borderRadius: "50%",
  },
});
