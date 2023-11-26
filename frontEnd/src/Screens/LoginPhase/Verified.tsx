import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Verified = ({ navigation }) => {
    return (
        <View>
            <View>
                <Image
                    source={require("../../../assets/splash.png")}
                    style={styles.logo}
                />
                <Image
                    source={require("../../../assets/verified.png")}
                    style={styles.img}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Verify")}>
                    <Image
                        source={require("../../../assets/back.png")}
                        style={styles.back}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => navigation.navigate("Login")}>
                    <Text style={{ color: "#ffffff", fontSize: 20 }}>Continue</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15 }}>
                <View>
                    <Text style={{
                        height: 24,
                        top: 450,
                        fontFamily: "Roboto",
                        fontSize: 25,
                        fontWeight: 400,
                        lineHeight: 24.2,
                        letterSpacing: 0,
                        textAlign: "center",
                    }}>Successfully Verified</Text>
                </View>
                <View>
                    <Text style={{
                        width: 330,
                        height: 44,
                        top: 460,
                        fontFamily: "Roboto",
                        fontSize: 17.5,
                        fontWeight: 400,
                        letterSpacing: 0,
                        textAlign: "center",
                        opacity: 0.65,
                        left: 41
                    }}>Your account has been Created.</Text>
                </View>
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
    button2: {
        alignItems: 'center',
        backgroundColor: '#42B92D',
        justifyContent: 'center',
        width: 308,
        height: 52,
        top: 700,
        borderRadius: 400,
    },


    img: {
        width: 221.15,
        height: 223,
        position: "absolute",
        top: 174,
        left: 92,
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

    },

    textInput: {
        marginBottom: 12,
        backgroundColor: "#E6E6E6",
        width: 308,
        height: 52,
        top: 362,
        left: 50,
        borderRadius: 35,
        justifyContent: "center"
    },
    textInput1: {

        backgroundColor: "#E6E6E6",
        width: 308,
        height: 52,
        top: 362,
        left: 50,
        borderRadius: 35,
        justifyContent: "center"
    }


});

export default Verified;