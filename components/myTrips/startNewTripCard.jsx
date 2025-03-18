import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
const StartNewTripCard = () => {
  const router = useRouter();
  return (
    <View
      style={{
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 35,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Entypo name="location-pin" size={30} color="black" />
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          fontFamily: "outfit-medium",
        }}
      >
        No trips planned yet
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontFamily: "outfit-regular",
          color: Colors.GREY,
        }}
      >
        Looks Like It's Time To Plan A New Travel Experince! Get Started Below
      </Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          backgroundColor: Colors.PRIMARY,
          padding: 20,
          width: 200,
          borderRadius: 20,
          alignItems: "center",
        }}
        onPress={() => router.push("/create-trip/Search-place")}
      >
        <Text
          style={{ color: Colors.WHITE, fontSize: 18, fontFamily: "outfit" }}
        >
          Start a new trip{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartNewTripCard;
