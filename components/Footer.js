import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RequestDisplay from "./RequestDisplay";
import React from "react";
import { Image } from "react-native";
import { Terminal } from "./Terminal";
import SingleRequest from "./SingleRequest";
import Login from "./Login";

const Tab = createBottomTabNavigator();

const Footer = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen
                    name="Home"
                    component={RequestDisplay}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={{
                                    uri: "https://cdn-icons-png.flaticon.com/128/1946/1946436.png",
                                }}
                                style={{
                                    height: 40,
                                    width: 40,
                                }}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="terminal"
                    component={Terminal}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={{
                                    uri: "https://cdn-icons-png.flaticon.com/128/8042/8042410.png",
                                }}
                                style={{
                                    height: 40,
                                    width: 40,
                                }}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Help"
                    component={Login}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={{
                                    uri: "https://cdn-icons-png.flaticon.com/128/1746/1746675.png",
                                }}
                                style={{
                                    height: 40,
                                    width: 40,
                                }}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Footer;
