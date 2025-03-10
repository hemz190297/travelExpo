import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation, useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/FirebaseConfig";

const SignUp = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("user::::", user);
        router.replace("/mytrip");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ..
      });
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 16, marginTop: 10 }}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
        }}
      >
        Create New Account
      </Text>

      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 15, fontFamily: "outfit" }}>Full Name</Text>
        <TextInput
          style={{
            borderWidth: 1,
            height: 50,
            borderColor: "#000",
            borderRadius: 10,
            paddingLeft: 20,
          }}
          value={fullName}
          placeholder="Enter Full Name"
          placeholderTextColor={"#2c2c2c"}
          onChangeText={(value) => setFullName(value)}
        />
      </View>
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
        onPress={() => onCreateAccount()}
      >
        <Text
          style={{ fontSize: 16, fontFamily: "outfit", color: Colors.WHITE }}
        >
          Create Account
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
        onPress={() => router.replace("auth/signIn")}
      >
        <Text
          style={{ fontSize: 16, fontFamily: "outfit", color: Colors.PRIMARY }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;
