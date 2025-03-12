import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import AuthService from "../services/AuthService";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await AuthService.login(email, password);
      Alert.alert("Success", `Welcome ${response.user.name}`);
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />

      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
