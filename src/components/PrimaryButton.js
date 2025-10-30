import { Text, TouchableOpacity } from "react-native";

export default function PrimaryButton({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor:"#2f6fed",
        paddingVertical:14,
        borderRadius:12,
        alignItems:"center",
        marginTop:12,
      }}
    >
      <Text style={{ color:"#fff", fontWeight:"600", fontSize:16 }}>{title}</Text>
    </TouchableOpacity>
  );
}
