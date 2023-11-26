import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

const Verify = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Image
                    source={require("../../../assets//splash.png")}
                    style={styles.logo}
                />
                <Image
                    source={require("../../../assets//verify.png")}
                    style={styles.img}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Number")}>
                    <Image
                        source={require("../../../assets//back.png")}
                        style={styles.back}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ right: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.textInput}>
                    <TextInput
                        keyboardType='number-pad'
                        placeholderTextColor='#000000'

                        style={{
                            paddingLeft: 20,
                            height: 17,
                            fontSize: 15,
                        }}
                    />
                </View>
                <View style={styles.textInput1}>
                    <TextInput
                        keyboardType='number-pad'
                        placeholderTextColor='#000000'

                        style={{
                            paddingLeft: 20,
                            height: 17,
                            fontSize: 15,
                        }}
                    />
                </View>
                <View style={styles.textInput2}>
                    <TextInput
                        keyboardType='number-pad'
                        placeholderTextColor='#000000'

                        style={{
                            paddingLeft: 20,
                            height: 17,
                            fontSize: 15,
                        }}
                    />
                </View>
                <View style={styles.textInput3}>
                    <TextInput
                        keyboardType='number-pad'
                        placeholderTextColor='#000000'

                        style={{
                            paddingLeft: 20,
                            height: 17,
                            fontSize: 15,
                        }}
                    />
                </View>
                <View style={styles.textInput4}>
                    <TextInput
                        keyboardType='number-pad'
                        placeholderTextColor='#000000'

                        style={{
                            paddingLeft: 20,
                            height: 17,
                            fontSize: 15,
                        }}
                    />
                </View>
            </View>

            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => navigation.navigate("Verified")}>
                    <Text style={{ color: "#ffffff", fontSize: 20 }}>Verify</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 5 }}>
                <View>
                    <Text style={{
                        height: 24,
                        top: 310,
                        fontFamily: "Roboto",
                        fontSize: 25,
                        fontWeight: 400,
                        lineHeight: 24.2,
                        letterSpacing: 0,
                        textAlign: "center",
                    }}>Enter Verification Code</Text>
                </View>
                <View>
                    <Text style={{
                        width: 330,
                        height: 44,
                        top: 315,
                        fontFamily: "Roboto",
                        fontSize: 17.5,
                        fontWeight: 400,
                        letterSpacing: 0,
                        textAlign: "center",
                        opacity: 0.65,
                        left: 41
                    }}>We are automatically detecting a SMS
                        send to your mobile number *********85</Text>
                </View>
                <View>
                    <Text style={{
                        width: 228,
                        height: 17,
                        top: 400,
                        left: 98,
                        color: "#000000",
                        fontSize: 14

                    }}>Didn’t receive the OTP?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
                        <Text style={{
                            width: 228,
                            height: 17,
                            top: 383,
                            left: 245,
                            color: "#42B92D",
                            fontSize: 14

                        }}>RESEND OTP</Text>
                    </TouchableOpacity>
                </View>

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
        top: 630,
        borderRadius: 400,
    },


    img: {
        width: 180.9,
        height: 211,
        position: "absolute",
        top: 157,
        left: 105,
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
        width: 60,
        height: 52,
        top: 470,
        borderRadius: 15,
        justifyContent: "center"
    },
    textInput1: {
        marginBottom: 12,
        backgroundColor: "#E6E6E6",
        width: 60,
        height: 52,
        top: 470,
        left: 7,
        borderRadius: 15,
        justifyContent: "center"
    },
    textInput2: {
        marginBottom: 12,
        backgroundColor: "#E6E6E6",
        width: 60,
        height: 52,
        top: 470,
        left: 14,
        borderRadius: 15,
        justifyContent: "center"
    },
    textInput3: {
        marginBottom: 12,
        backgroundColor: "#E6E6E6",
        width: 60,
        height: 52,
        top: 470,
        left: 21,
        borderRadius: 15,
        justifyContent: "center"
    },
    textInput4: {
        marginBottom: 12,
        backgroundColor: "#E6E6E6",
        width: 60,
        height: 52,
        top: 470,
        left: 29,
        borderRadius: 15,
        justifyContent: "center"
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },


});

export default Verify;