import React from "react";
import { Image, Text, View } from "react-native";
import Login from "./../components/Login";
import { auth } from "./../configs/FirebaseConfig";
import { Redirect } from "expo-router";

export default function Index() {
  const user = auth.currentUser;
  return <View>{user ? <Redirect href={"/mytrip"} /> : <Login />}</View>;
}
