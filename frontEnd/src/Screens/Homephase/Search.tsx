import React from "react";

import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
const Search = () => {
    return (
        <View style={styles.asembler}>
            <View style={styles.container}>
                <TextInput
                    placeholder="Search"
                    keyboardType="default"
                    placeholderTextColor="#000000"
                    style={styles.input} />
            </View>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Ionicons name="search" size={20} color="#000000" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E6E6E6",
        width: 250,
        height: 35,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        justifyContent: "center",
    },
    input: {
        marginLeft: 10,
        marginTop: 3,
        bottom: 2.5

    },
    asembler: {
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        height: 35,
        width: 60,
        backgroundColor: "#E6E6E6",
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        marginRight: 10,
    }
});

export default Search;