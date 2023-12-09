import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Index = ({ navigation }) => {
    return (
        <View>
            <View>
                <Image
                    source={require("../../../assets/splash.png")}
                    style={styles.logo}
                />
                <Image
                    source={require("../../../assets/index.png")}
                    style={styles.img}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
                    <Image
                        source={require("../../../assets/back.png")}
                        style={styles.back}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => navigation.navigate("Login")}>
                    <Text style={{ color: "#42B92D", fontSize: 20 }}>Login</Text>
                </TouchableOpacity>
                {/* </View>
            <View style={styles.container}> */}
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => navigation.navigate("Signup")}>
                    <Text style={{ color: "#ffffff", fontSize: 20 }}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button1: {
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
        justifyContent: 'center',
        width: 308,
        height: 52,
        top: 650,
        borderRadius: 400,
    },
    button2: {
        alignItems: 'center',
        backgroundColor: '#42B92D',
        justifyContent: 'center',
        width: 308,
        height: 52,
        top: 670,
        borderRadius: 400,
    },


    img: {
        width: 222,
        height: 231.06,
        position: "absolute",
        top: 175,
        left: 84,
    },

    logo: {
        width: 131,
        height: 48.1,
        position: "absolute",
        top: 82,
        left: 132,
    },

    back: {
        width: 8.5,
        height: 20,
        top: 66.56,
        left: 29.5,

    }




});

export default Index;