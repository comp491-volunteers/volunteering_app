import { Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import ScreenContainer from "../components/ScreenContainer";

export default function TaskDetailScreen() {
  return (
    <ScreenContainer>
      <Text style={{ fontSize:22, fontWeight:"700" }}>Task Detail</Text>
      <PrimaryButton title="Reserve" onPress={() => alert("Reserved!")} />
    </ScreenContainer>
  );
}
