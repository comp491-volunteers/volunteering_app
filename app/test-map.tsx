import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function TestMapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map Integration Test</Text>
      
      <Link href="/map" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to Map</Text>
        </Pressable>
      </Link>
      
      <Text style={styles.info}>
        This screen is for testing the map integration.
        Tap the button above to view the Istanbul event map.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  info: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
  },
});
