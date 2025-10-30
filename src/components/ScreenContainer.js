import { SafeAreaView, View } from "react-native";

export default function ScreenContainer({ children }) {
  return (
    <SafeAreaView style={{ flex:1, backgroundColor:"#fff" }}>
      <View style={{ flex:1, padding:20 }}>{children}</View>
    </SafeAreaView>
  );
}
