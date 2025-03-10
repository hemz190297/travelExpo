import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Image
        source={require("./../assets/images/travellcopy.jpg")}
        style={{ width: "100%", height: 480, resizeMode: "stretch" }}
      />
      <View style={styles.container}>
        <Text style={styles.Text}>AI Trevel Planner</Text>
        <Text style={styles.info}>
          Discover your next adventure effortlessly Personalized itineraries at
          your fingertips.Travel smarter with AI-driven insights
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.push("auth/signIn");
          }}
        >
          <Text style={styles.buttonText}>Sign In With Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    padding: 25,
    marginTop: -20,
  },
  Text: {
    fontFamily: "outfit-bold",
    fontSize: 30,
    textAlign: "center",
  },
  info: {
    fontFamily: "outfit-light",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    height: 40,
    borderRadius: 25,
    backgroundColor: Colors.PRIMARY,
    justifyContent: "flex-end",
    marginTop: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "outfit-light",
    fontSize: 20,
    color: Colors.WHITE,
    textAlign: "center",
  },
});
