
//starting screen, 2 primary join the movement, keep making an impact
//uses expo router for navig
//home screen
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../src/components/PrimaryButton";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ImpAct</Text>
      <Text style={styles.subtitle}>Small acts. Lasting change.🌿</Text>

      <PrimaryButton
              title="Join the Movement!✨"
              onPress={() => router.push("/register")} variant={undefined}      />

      <Text style={styles.alreadyText}></Text>

      <PrimaryButton
        title="Keep Making an Impact!🫂"
        variant="secondary"
        onPress={() => router.push("/map")}
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
    fontSize: 34,
    fontWeight: "bold",
    color: "#EC407A",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  alreadyText: {
    marginTop: 20,
    marginBottom: 6,
    fontSize: 14,
    color: "#444",
  },
});
