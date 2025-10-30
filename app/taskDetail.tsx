import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function TaskDetail() {
  const router = useRouter();
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>
      <Text style={{ fontSize:20, fontWeight:"700" }}>Task Detail</Text>
      <Button title="Reserve (mock)" onPress={() => alert("Reserved!")} />
      <View style={{ height:8 }} />
      <Button title="Back to Map" onPress={() => router.back()} />
    </View>
  );
}
