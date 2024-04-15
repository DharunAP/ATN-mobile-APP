import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import { Terminal } from "./components/Terminal";
import RequestDispaly from "./components/RequestDisplay";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            {/* <Terminal /> */}
            <Header />
            {/* <RequestDispaly /> */}
            <Footer />
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
