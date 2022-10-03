import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './Pages/Index.js';
export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
      <StatusBar style="auto" />
    </View>
  );
}
// npm install react-native-elements
// npm i --save react-native-vector-icons

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
