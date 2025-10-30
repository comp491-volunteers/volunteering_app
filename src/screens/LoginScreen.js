// src/screens/LoginScreen.js

import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import ScreenContainer from "../components/ScreenContainer";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScreenContainer>
      <Text style={styles.title}>ImpAct</Text>
      <Text style={styles.subtitle}>Welcome back, changemaker! 🌱</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <PrimaryButton
        title="Log In 🚀"
        onPress={() => {
          // TODO: Add validation/auth if needed
          router.push("/map");
        }}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#EC407A",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderColor: "#EC407A",
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
});
