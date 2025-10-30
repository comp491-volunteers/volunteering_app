import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Istanbul coordinates
const ISTANBUL_REGION = {
  latitude: 41.0082,
  longitude: 28.9784,
  latitudeDelta: 0.15,
  longitudeDelta: 0.15,
};

// Static events for your app
const generateDummyEvents = () => {
  const events = [
    {
      id: 1,
      title: 'Meet up at Taksim',
      description: 'Join us for a casual meetup at Taksim Square!',
      coordinate: {
        latitude: 41.0369,  // Taksim Square
        longitude: 28.9850,
      },
    },
    {
      id: 2,
      title: 'Meet up at Kadıköy',
      description: 'Let\'s meet at Kadıköy for coffee and conversation!',
      coordinate: {
        latitude: 40.9904,  // Kadıköy center
        longitude: 29.0245,
      },
    },
    {
      id: 3,
      title: 'Progress Meeting at Koç University Istanbul',
      description: 'Team progress meeting at Koç University campus.',
      coordinate: {
        latitude: 41.1636,  // Koç University Rumelifeneri Campus (correct location)
        longitude: 29.0403,
      },
    },
  ];

  return events;
};

const IstanbulMap = () => {
  const [dummyEvents] = useState(generateDummyEvents());
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={ISTANBUL_REGION}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsScale={true}
      >
        {dummyEvents.map((event) => (
          <Marker
            key={event.id}
            coordinate={event.coordinate}
            title={event.title}
            description={event.description}
            onPress={() => setSelectedEvent(event)}
            pinColor={selectedEvent?.id === event.id ? 'gold' : 'red'}
          />
        ))}
      </MapView>

      {/* Optional: Show selected event details */}
      {selectedEvent && (
        <View style={styles.eventCard}>
          <Text style={styles.eventTitle}>{selectedEvent.title}</Text>
          <Text style={styles.eventDescription}>{selectedEvent.description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  eventCard: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default IstanbulMap;
