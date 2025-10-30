//placeholder screen for map
//navigates to task detail 
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../src/components/PrimaryButton";

export default function MapScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Replace with actual Map later */}
      <Text style={styles.title}>Map Screen (mock)</Text>

      {/* Bottom-left corner button */}
      <View style={styles.buttonWrapper}>
        <PrimaryButton
          title="Go to Task Detail →"
          onPress={() => router.push("/taskDetail")}
        />
      </View>
import React from 'react';
import { StyleSheet, View } from 'react-native';
import IstanbulMap from '@/components/map/IstanbulMap';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <IstanbulMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    position: "relative",
  },
  title: {
    position: "absolute",
    top: 40,
    left: 20,
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 20,
    left: 20,
    width: "60%", // Adjust based on design
  },
});
