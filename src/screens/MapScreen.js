import { Text, View } from "react-native";
import MapView from "react-native-maps";

export default function MapScreen({ navigation }) {
  return (
    <View style={{ flex:1 }}>
      <MapView
        style={{ flex:1 }}
        initialRegion={{
          latitude: 41.085,
          longitude: 29.050,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
      />
      <Text style={{ position:"absolute", top:40, left:20, fontWeight:"700" }}>
        Map Screen (mock)
      </Text>
    </View>
  );
}
