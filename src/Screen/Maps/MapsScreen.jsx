import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default function MapsScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [distance, setDistance] = useState(null);
  const [loading, setLoading] = useState(true);

  const destination = { latitude: -34.602691, longitude: -58.387950 };

  const calculateDistance = async (currentLocation) => {
    const calculatedDistance = await Location.distanceAsync(
      destination,
      currentLocation.coords
    );
    setDistance(calculatedDistance);
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) {
          throw new Error("Location permission not granted");
        }
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        await calculateDistance(currentLocation);
      } catch (error) {
        setErrorMsg(error.message);
      } finally {
        setLoading(false);
      }
    };

    requestLocationPermission();
  }, []);

  let text = "Waiting for location...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location && !loading) {
    text = `Distance from destination: ${distance} meters`;
  }

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -34.602691,
            longitude: -58.387950,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={location.coords} title="Current Location" />
          <Marker coordinate={destination} title="Cafeteria" />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  distance: {
    position: "absolute",
    top: 50,
    left: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
