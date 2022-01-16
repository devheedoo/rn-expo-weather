import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [location, setLocation] = useState('LOADING...');
  const [isGranted, setGranted] = useState(false);

  const loadLocation = async () => {
    const { status } = await Location.getForegroundPermissionsAsync();
    setGranted(status === 'granted');

    if (!isGranted) {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocation('NOT GRANTED');
        return;
      }
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();
    const locationGeocodedAddress = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false },
    );
    setLocation(locationGeocodedAddress[0].city);
  };

  useEffect(() => {
    loadLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{location}</Text>
      </View>
      <View style={styles.weather}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.day}>
            <Text style={styles.temperature}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temperature}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temperature}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temperature}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </ScrollView>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  city: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 68,
    fontWeight: 'bold',
    color: 'whitesmoke',
  },
  weather: {
    flex: 3,
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temperature: {
    marginTop: 70,
    fontSize: 200,
    fontWeight: 'bold',
    color: 'whitesmoke',
  },
  description: {
    marginTop: -30,
    fontSize: 60,
    color: 'whitesmoke',
  },
});
