import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { BACKEND_URL } from '@env';
import Modal from 'react-native-modal';
const Signup = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
    const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
    const SuccessModal = ({ isVisible, onClose }) => {
        return (
            <Modal isVisible={isVisible} animationIn="fadeIn" animationOut="fadeOut">
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Sucess</Text>
              <Text style={{ textAlign: 'center' }}>Signed up successfully</Text>
              <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
                <Text style={{ color: 'blue', fontSize: 16 }}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        );
      };
      const ErrorModal = ({ isVisible, onClose }) => {
        return (
            <Modal isVisible={isVisible} animationIn="fadeIn" animationOut="fadeOut">
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Error</Text>
              <Text style={{ textAlign: 'center' }}>Password and Confirm Password don't match</Text>
              <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
                <Text style={{ color: 'blue', fontSize: 16 }}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        );
      };
    const handleRegister = async () => {

      try {
       if(password === confirmPassword && password!=null){
        console.log(`${BACKEND_URL}/user`);
        const response = await axios.post(`${BACKEND_URL}/user`, {
          name,
          email,
          password,
        });
        console.log(response.data);
        setIsSuccessModalVisible(true);
        navigation.navigate('Login');
    }
    else{
        setIsErrorModalVisible(true);
    }
      } catch (error) {

        console.error('Error registering user:', error);
      }
    };
  
    return (
        <View>
              <SuccessModal isVisible={isSuccessModalVisible} onClose={() => setIsSuccessModalVisible(false)} />
              <ErrorModal isVisible={isErrorModalVisible} onClose={() => setIsErrorModalVisible(false)} />
            <View>
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
                    onPress={handleRegister}>
                    {/* onPress={() => navigation.navigate("Number")}> */}
                    <Text style={{ color: "#ffffff", fontSize: 20 }}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textInput}>
                <TextInput

                    placeholder='Enter name'
                    keyboardType='default'
                    placeholderTextColor='#000000'
                    onChangeText={setName}
                    value={name}
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
                    onChangeText={setEmail}
                    value={email}
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
                    onChangeText={setPassword}
                    value={password}
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
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    style={{
                        paddingLeft: 20,
                        height: 17,
                        fontSize: 15,
                        
                    }}
                />
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