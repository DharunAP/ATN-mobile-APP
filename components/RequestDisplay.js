import React, { useState } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const RequestDisplay = () => {
    const [City, setCity] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "Chennai", value: "chennai" },
        { label: "Kerala", value: "kerala" },
    ]);

    return (
        <>
            <View style={styles.main_view}>
                <TextInput placeholder="Search" style={styles.search_option} />

                <View style={{ height: 70, marginBottom: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "column",
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                marginTop: 10,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginTop: 10,
                                    marginRight: 30,
                                }}
                            >
                                Current Request :
                            </Text>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                containerStyle={{
                                    width: 150,
                                    height: 40,
                                }}
                            />
                        </View>

                        <View style={styles.dashedLine} />
                    </View>
                </View>

                <View style={{ height: 90, marginBottom: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "column",
                            marginLeft: 20,
                            marginBottom: 15,
                            width: 300,
                            overflow: "hidden",
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 5,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 17,
                                    fontWeight: "bold",
                                    marginRight: 60,
                                }}
                            >
                                Deepak Prakash
                            </Text>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    width: 150,
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Text style={{ fontSize: 15 }}>
                                    {" "}
                                    9634589752
                                </Text>
                                <View
                                    style={{
                                        borderRadius: 100,
                                        height: 10,
                                        width: 10,
                                        backgroundColor: "red",
                                    }}
                                />
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 14 }}>
                                Location: Anna Nagar, Chennai.
                            </Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <Text>Requires : </Text>
                            <Text> Rice - 20Kg</Text>
                            <Text> Water - 10</Text>
                        </View>
                    </View>
                    <View style={styles.dashedLine} />
                </View>
                {/* this is the end */}
            </View>
        </>
    );
};

export default RequestDisplay;

const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        flexDirection: "column",
        padding: 15,
        backgroundColor: "#FFE6CF",
    },

    search_option: {
        borderColor: "black",
        borderRadius: 15,
        borderWidth: 1,
        width: 350,
        paddingLeft: 20,
        marginBottom: 5,
        height: 40,
    },

    dropbox: {
        height: 40,
        width: 30,
    },
    dashedLine: {
        height: 1,
        borderWidth: 0.5,
        borderColor: "black",
        borderStyle: "dashed",
        marginLeft: 5,
        marginRight: 10,
    },
});
