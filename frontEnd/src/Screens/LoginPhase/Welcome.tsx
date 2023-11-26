import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Text style={styles.title}>Welcome👋</Text>
            <Image
                source={require("../../../assets/splash.png")}
                style={styles.splash}
            />
            <Text style={styles.welText}>
                Lorem ipsum dolor sit amet consectetur. Elementum dui non euismod vehicula augue praesent gravida viverra. Aliquam rutrum elit lacus nisl viverra fringilla augue. Hac nulla convallis in gravida est. Aliquet habitant dictum pulvinar mi tristique at. Consectetur adipiscing cras magna massa dolor.
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Index")}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 200,
    },
    splash: {
        height: 93.62,
        width: 255,
        position: "absolute",
        top: 260,
    },
    welText: {
        width: 303,
        height: 60,
        textAlign: 'justify',
        fontWeight: '400',
        fontSize: 12,
        marginTop: 20,
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#42B92D',
        padding: 10,
        width: 308,
        height: 52,
        borderRadius: 400,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 20,
    },
});


export default Welcome;