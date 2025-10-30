//designed to called from map screen or (future task list)
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../src/components/PrimaryButton";

export default function TaskDetailScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Detail</Text>

      <View style={styles.buttonGroup}>
        <PrimaryButton
          title="Reserve"
          onPress={() => alert("Reserved!")}
        />
        <PrimaryButton
          title="Back to Map"
          variant="secondary"
          onPress={() => router.back()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "flex-start",
    alignItems: "flex-start", // aligns content to left
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#EC407A",
    marginBottom: 20,
  },
  buttonGroup: {
    gap: 10,
    width: "100%",
  },
});
