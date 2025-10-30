// Defines global navigation "stack" --> controller that renders
// one route at a time and keeps history stack, for Expo Router
//every file is a route in /app, index.tsx = "/" route --> login screen


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
