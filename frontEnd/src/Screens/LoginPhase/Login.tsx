import { BACKEND_URL } from '@env';
import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modal';
const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
   
    const handleLogin = async () => {
      try {
        console.log(`${BACKEND_URL}/user/login`);
        const response = await axios.post(`${BACKEND_URL}/user/login`, {
          email,
          password,
        });
        console.log(response.data);
        navigation.navigate('Home');

      } catch (error) {
        setIsErrorModalVisible(true);
        console.error('Error logging in user:', error);
      }
    };
    const ErrorModal = ({ isVisible, onClose }) => {
        return (
            <Modal isVisible={isVisible} animationIn="fadeIn" animationOut="fadeOut">
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Error</Text>
              <Text style={{ textAlign: 'center' }}>Email or Password incorrect</Text>
              <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
                <Text style={{ color: 'blue', fontSize: 16 }}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        );
      };
  
    return (
        <View>
              <ErrorModal isVisible={isErrorModalVisible} onClose={() => setIsErrorModalVisible(false)} />
            <View>
                <Image
                    source={require("../../../assets/splash.png")}
                    style={styles.logo}
                />
                <Image
                    source={require("../../../assets/login.png")}
                    style={styles.img}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Verified")}>
                    <Image
                        source={require("../../../assets/back.png")}
                        style={styles.back}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={handleLogin}
                    // onPress={() => navigation.navigate("Home")}
                    >
                    <Text style={{ color: "#ffffff", fontSize: 20 }}>Login</Text>
                </TouchableOpacity>
            </View>
            <Text style={{
                    width: 213,
                    height: 19,
                    top: 735,
                    left: 115,
                    color: "#000000",
                }}>Are you registered?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                        <Text style={{
                            width: 213,
                            height: 19,
                            top: 715.5,
                            left: 238.5,
                            color: "#3353FC",
                            textDecorationLine: "underline"
                        }}>Sign up.</Text>
                    </TouchableOpacity>
            <View style={styles.textInput}>
                <TextInput

                    placeholder='Email'
                    keyboardType='default'
                    placeholderTextColor='#000000'
                    onChangeText={setEmail}
                    value={email}
                    style={{
                        paddingLeft: 20,
                        height: 17,
                        fontSize: 15,
                    }}
                />
            </View>
            <View style={styles.textInput}>
                <TextInput

                    placeholder='Password'
                    keyboardType='number-pad'
                    placeholderTextColor='#000000'
                    onChangeText={setPassword}
                    value={password}
                    style={{
                        paddingLeft: 20,
                        height: 17,
                        fontSize: 15,


                    }}
                />
            </View>
            <Text style={{
                width: 228,
                height: 17,
                top: 425,
                left: 98,
                color: "#000000"

            }}>Forgot Password?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={{
                    width: 228,
                    height: 17,
                    top: 407.5,
                    left: 214,
                    color: "#3353FC",
                    textDecorationLine: "underline"
                }}>Reset password.</Text>
            </TouchableOpacity>
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
        width: 314.11,
        height: 187.79,
        position: "absolute",
        top: 191,
        left: 38,
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
        top: 422,
        left: 52,
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

export default Login;