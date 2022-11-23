import { Text, View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles/GlobalStyles';

export default function App() {
  return (
    <View style={styles.app}>
      <MapView
        style={styles.containerMap}
      />
    </View>
  );
}
