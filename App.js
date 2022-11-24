import { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles/GlobalStyles';

export default function App() {

  const [origin, setOrigin] = useState({
    latitud: '-31.417117',
    longitud: '-64.183507'
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
              latitude: origin.latitud,
              longitude:origin.longitud,
              latitudeDelta:0.09,
              longitudeDelta:0.04
            }}
          />
        </View>
      </View>
    </>
  );
}
