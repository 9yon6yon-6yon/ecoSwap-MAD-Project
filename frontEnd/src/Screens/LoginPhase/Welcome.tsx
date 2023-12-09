import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Welcome = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View>
                <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 200 }}>Welcome👋</Text>
                <Image
                    source={require("../../../assets/splash.png")}
                    style={styles.splash}
                />
                <Text style={styles.welText}>Lorem ipsum dolor sit amet consectetur. Elementum dui non euismod vehicula augue praesent gravida viverra. Aliquam rutrum elit lacus nisl viverra fringilla augue. Hac nulla convallis in gravida est. Aliquet habitant dictum pulvinar mi tristique at. Consectetur adipiscing cras magna massa dolor. </Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Index")}
                >
                    <Text style={{ color: "#ffffff", fontSize: 20 }}>Get Started</Text>
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
        marginBottom: 110,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#42B92D',
        padding: 10,
        marginTop: 820,
        width: 308,
        height: 52,
        borderRadius: 400,
    },
    splash: {
        height: 93.62,
        width: 255,
        position: "absolute",
        top: 260,
        left: 70,
    },
    welText: {
        width: 303,
        height: 60,
        textAlign: 'justify',
        fontWeight: '400',
        fontSize: 12,
        top: 130,
        left: 49,
        lineHeight: 12.1,
    }



    
});

export default Welcome;