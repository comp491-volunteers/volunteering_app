import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

export default function IstanbulMap() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map not available on web in this build</Text>
      <Text style={styles.subtitle}>
        Please run the app on iOS or Android to view the interactive map.
      </Text>
      <Pressable onPress={() => Linking.openURL('https://maps.google.com/?q=Istanbul')}
        style={styles.button}
        accessibilityRole="link">
        <Text style={styles.buttonText}>Open Istanbul in Google Maps</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1e88e5',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});


