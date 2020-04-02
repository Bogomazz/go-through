import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  let mapRef: MapView | null;
  
  useEffect(() => {
    if (mapRef !== null) {
      navigator.geolocation.getCurrentPosition((position)=> {
        const {latitude, longitude} = position.coords;
        mapRef!.animateCamera({center: {latitude, longitude}, altitude: 10000, zoom: 15})
      })
    }
  }, [])

  // Don't forget: https://github.com/react-native-community/react-native-maps/issues/1901
  return (
    <View style={styles.container}>
      <MapView 
        ref={(map) => mapRef = map}
        style={styles.mapStyle}
        showsUserLocation={true}
      > 
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    display: 'flex',
    justifyContent: 'flex-end'
  },
});
