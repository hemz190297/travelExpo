import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation, useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";

const SignIn = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.replace("/mytrip");
        // console.log("user::::::", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("user error:::::", errorCode, errorMessage);
      });
  };
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={{ padding: 16, marginTop: 40 }}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
        }}
      >
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-light",
          marginTop: 20,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-light",
          marginTop: 20,
        }}
      >
        You've been missed!
      </Text>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 15, fontFamily: "outfit" }}>Email</Text>
        <TextInput
          style={{
            borderWidth: 1,
            height: 50,
            borderColor: "#000",
            borderRadius: 10,
            paddingLeft: 20,
          }}
          value={email}
          placeholder="Enter Email"
          placeholderTextColor={"#2c2c2c"}
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 15, fontFamily: "outfit" }}>Password</Text>
        <TextInput
          style={{
            borderWidth: 1,
            height: 50,
            borderColor: "#000",
            borderRadius: 10,
            paddingLeft: 20,
          }}
          value={password}
          placeholder="Enter Password"
          placeholderTextColor={"#2c2c2c"}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          height: 50,
          borderRadius: 10,
          marginTop: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => onSignIn()}
      >
        <Text
          style={{ fontSize: 16, fontFamily: "outfit", color: Colors.WHITE }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          borderRadius: 10,
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#000",
          borderWidth: 1,
        }}
        onPress={() => router.replace("auth/signUp")}
      >
        <Text
          style={{ fontSize: 16, fontFamily: "outfit", color: Colors.PRIMARY }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
