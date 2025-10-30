import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>
      <Text style={{ fontSize:28, fontWeight:"700", marginBottom:10 }}>ImpAct</Text>
      <Text style={{ color:"#666", marginBottom:20 }}>Prototype login (mock)</Text>
      <Button title="Continue" onPress={() => router.push("/map")} />
    </View>
  );
}
