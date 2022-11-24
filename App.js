import { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import styles from './styles/GlobalStyles';

export default function App() {

  const [origin, setOrigin] = useState({
    latitude: -31.417117,
    longitude: -64.183507
  })

  const [destination, setdestination] = useState({
    latitude: -31.420065,
    longitude: -64.188807
  })

  return (
    <>
      <StatusBar />
      <View style={styles.app}>
        <Text style={styles.title}>GooGleMapTemplet</Text>
        <View style={styles.containerMap}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: origin.latitude,
              longitude: origin.longitude,
              latitudeDelta: 0.09,
              longitudeDelta: 0.04
            }}
          >
            <Marker
              draggable
              onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
              coordinate={origin}
            />
            <Marker
              draggable
              onDragEnd={(direction) => setdestination(direction.nativeEvent.coordinate)}
              coordinate={destination}
            />
            
            {/* Polyline solo marca una linea recta */}
            <Polyline
              coordinates={[origin, destination]}
              strokeColor='pink'
              strokeWidth={6}
            />
          </MapView>
        </View>
      </View>
    </>
  );
}
