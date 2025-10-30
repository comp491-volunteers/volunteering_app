import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Map() {
  const router = useRouter();
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>
      <Text style={{ fontSize:18, fontWeight:"600" }}>Map Screen (mock)</Text>
      <Button title="Go to Task Detail →" onPress={() => router.push("/taskDetail")} />
    </View>
  );
}
