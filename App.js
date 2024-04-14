import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import { Terminal } from './components/Terminal'

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Terminal/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      backgroundColor:'#FFE6CF',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});
