import React from 'react';
import { View, Text, Button, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Signup = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    source={require("../../../assets/splash.png")}
                    style={styles.logo}
                />
                <Image
                    source={require("../../../assets/sign-up.png")}
                    style={styles.img}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Index")}>
                    <Image
                        source={require("../../../assets/back.png")}
                        style={styles.back}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => navigation.navigate("Number")}>
                    <Text style={{ color: "#ffffff", fontSize: 20 }}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textInput}>
                <TextInput

                    placeholder='Enter name'
                    keyboardType='default'
                    placeholderTextColor='#000000'

                    style={{
                        paddingLeft: 20,
                        height: 17,
                        fontSize: 15,
                    }}
                />
            </View>
            <View style={styles.textInput}>
                <TextInput

                    placeholder='Enter e-mail'
                    keyboardType='email-address'
                    placeholderTextColor='#000000'

                    style={{
                        paddingLeft: 20,
                        // width: 75,
                        height: 17,
                        // top: 379,
                        // left: 57,
                        fontSize: 15,


                    }}
                />
            </View>
            <View style={styles.textInput}>
                <TextInput

                    placeholder='Password'
                    keyboardType='default'
                    placeholderTextColor='#000000'

                    style={{
                        paddingLeft: 20,
                        // width: 75,
                        height: 17,
                        // top: 379,
                        // left: 57,
                        fontSize: 15,


                    }}
                />
            </View>
            <View style={styles.textInput1}>
                <TextInput

                    placeholder='Confirm password'
                    keyboardType='default'
                    placeholderTextColor='#000000'

                    style={{
                        paddingLeft: 20,
                        height: 17,
                        fontSize: 15,

                    }}
                />
            </View>

        </SafeAreaView>
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
        width: 277.27,
        height: 199,
        position: "absolute",
        top: 135,
        left: 56,
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

export default Signup;