import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* index.tsx maps to "/" */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="map" options={{ title: "Explore" }} />
      <Stack.Screen name="taskDetail" options={{ title: "Details" }} />
    </Stack>
  );
}
