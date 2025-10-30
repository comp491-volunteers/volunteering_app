import React from 'react';
import { StyleSheet, View } from 'react-native';
import IstanbulMap from '@/components/map/IstanbulMap';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <IstanbulMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
