import { StatusBar, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles/GlobalStyles';

export default function App() {
  return (
    <>
      <StatusBar />
      <View style={styles.app}>
          <Text style={styles.title}>GooGleMapTemplet</Text>
          <View style={styles.containerMap}>
            <MapView
              style={styles.map}
            />
          </View>
      </View>
    </>
  );
}
