//login screen for returning volunteering
//includes email and password input --> will be wired to backend
import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../src/components/PrimaryButton";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ImpAct</Text>
      <Text style={styles.subtitle}>Welcome back, changemaker! 💫</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#aaa"
      />

      <PrimaryButton
        title="Keep Making an Impact!🚀"
        variant="primary"
        onPress={() => router.push("/map")}
      />

      <Text style={styles.extraText}>New here?</Text>

      <PrimaryButton
        title="Join the Movement!✨"
        variant="secondary"
        onPress={() => router.push("/register")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#EC407A",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#444",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#EC407A",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  extraText: {
    marginTop: 20,
    marginBottom: 6,
    fontSize: 14,
    color: "#444",
  },
});
