import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const areas = [
  "Environmental and Climate Action",
  "Childcare & Youth",
  "Education Access",
  "Mentoring Children",
  "Orphanage Support",
  "Elderly & Health",
  "Women’s Rights",
  "LGBTQ+ Support",
  "Mental Health Awareness",
  "Refugee & Disability Aid",
  "Fundraising & Donations",
  "Technology for NGOs",
  "Open to All Opportunities"
];

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("18");
  const [selectedAreas, setSelectedAreas] = useState([]);

  const toggleArea = (area) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleRegister = () => {
    if (!name || !surname || !email || !phone || !city || !age || selectedAreas.length === 0) {
      alert("Please fill in all fields and select at least one impact area.");
      return;
    }
    // For now, just log and go to /map
    console.log({ name, surname, email, phone, city, age, selectedAreas });
    alert("Thanks for joining, " + name + "!");
    router.push("/map");
  };

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Become a Volunteer</Text>

      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Surname" value={surname} onChangeText={setSurname} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="City" value={city} onChangeText={setCity} />

      <Text style={styles.label}>Select Your Age</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
        {[...Array(83).keys()].map((n) => {
          const ageStr = String(n + 18);
          return (
            <Pressable
              key={ageStr}
              style={[styles.ageBox, age === ageStr && styles.selectedBox]}
              onPress={() => setAge(ageStr)}
            >
              <Text style={styles.ageText}>{ageStr}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <Text style={styles.label}>What areas do you want to make an impact in?</Text>
      {areas.map((area) => (
        <Pressable
          key={area}
          style={[styles.areaBox, selectedAreas.includes(area) && styles.selectedArea]}
          onPress={() => toggleArea(area)}
        >
          <Text style={styles.areaText}>{area}</Text>
        </Pressable>
      ))}

      <PrimaryButton title="Start Volunteering" onPress={handleRegister} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { backgroundColor: "#fff" },
  container: {
    padding: 24,
    paddingBottom: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    color: "#EC407A",
    textAlign: "center",
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    fontSize: 16,
  },
  label: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "600",
    color: "#333",
  },
  scrollRow: {
    marginBottom: 20,
  },
  ageBox: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedBox: {
    backgroundColor: "#EC407A",
  },
  ageText: {
    color: "#333",
    fontWeight: "500",
  },
  areaBox: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedArea: {
    backgroundColor: "#F8BBD0",
    borderColor: "#EC407A",
  },
  areaText: {
    color: "#333",
  },
});
