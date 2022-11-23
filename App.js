import { StatusBar, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles/GlobalStyles';

export default function App() {
  return (
    <>

      <StatusBar />
      <View style={styles.app}>
        <View>
          <Text>GooGleMapTemplet</Text>
          <View tyle={styles.containerMap}>
            <MapView
              style={styles.map}
            />
          </View>
        </View>
      </View>
    </>
  );
}
