import { Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import ScreenContainer from "../components/ScreenContainer";

export default function LoginScreen({ navigation }) {
  return (
    <ScreenContainer>
      <Text style={{ fontSize:28, fontWeight:"700", marginTop:40 }}>ImpAct</Text>
      <Text style={{ color:"#666", marginTop:8 }}>Tap to continue (mock login)</Text>
      <PrimaryButton title="Continue" onPress={() => navigation.replace("Map")} />
    </ScreenContainer>
  );
}
