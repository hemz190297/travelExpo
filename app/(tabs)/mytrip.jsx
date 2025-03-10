import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import StartNewTripCard from "../../components/myTrips/startNewTripCard";
import { Colors } from "@/constants/Colors";
export default function mytrip() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 80,
        backgroundColor: Colors.WHITE,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 25,
        }}
      >
        <Text style={{ fontSize: 40, fontFamily: "outfit-bold" }}>
          My Trips
        </Text>
        <AntDesign name="pluscircle" size={45} color="black" />
      </View>
      <StartNewTripCard />
    </SafeAreaView>
  );
}
