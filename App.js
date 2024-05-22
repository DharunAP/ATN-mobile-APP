import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import { QR_Code } from "./components/QR_Code";
import { Terminal } from "./components/Terminal";
import RequestDispaly from "./components/RequestDisplay";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
    // const storeData = async (key, value) => {
    //     try {
    //       await AsyncStorage.setItem(key, JSON.stringify(value));
    //       console.log('Data saved successfully!');
    //     } catch (e) {
    //       console.error('Error saving data:', e);
    //     }
    //   };
    //   storeData('User',{id:'wqeer4321sd',name:'Deepa',email:'deepa.deva@gmail.com',number:'9871234560',address:'123,XYZ Street Pudukottai, TN'})
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            {/* <Footer /> */}
            <QR_Code/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "#FFE6CF",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
