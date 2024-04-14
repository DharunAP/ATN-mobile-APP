import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Logo from "../assets/ATN-logo-2.png";
import profile from "../assets/profile.png";

const Header = () => {
    return (
        <View style={{ height: 63, marginBottom: 5 }}>
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    marginTop: 10,
                    justifyContent: "space-between",
                }}
            >
                <Image source={Logo} style={styles.logo_img} />
                <Image source={profile} style={styles.pro} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    logo_img: {
        height: 50,
        width: 70,
        marginLeft: 20,
    },
    pro: {
        height: 50,
        width: 50,
        marginRight: 20,
    },
});

export default Header;
