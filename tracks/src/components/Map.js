import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 27.671 + i * Math.random() * 0.0001,
      longitude: 85.4298 + i * Math.random() * 0.0001,
      latitudeDelta: 5,
      longitudeDelta: 5
    });
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 27.671,
        longitude: 85.4298,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
