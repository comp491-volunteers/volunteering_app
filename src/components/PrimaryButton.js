//custom button
//used in login register, home screen,
import { Pressable, StyleSheet, Text } from "react-native";

export default function PrimaryButton({ title, onPress, variant = "primary" }) {
  const isSecondary = variant === "secondary";

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, isSecondary ? styles.secondary : styles.primary]}
    >
      <Text style={[styles.text, isSecondary ? styles.secondaryText : styles.primaryText]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  primary: {
    backgroundColor: "#EC407A",
  },
  secondary: {
    backgroundColor: "#F8BBD0",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  primaryText: {
    color: "#fff",
  },
  secondaryText: {
    color: "#880E4F",
  },
});
