import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Button,
  Image,
  TextInput
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import axios from "axios";


const Number = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<React.RefObject<PhoneInput>>(null);
  const handleSendOTP = () => {
    const isValid: boolean = phoneInput.current?.isValidNumber(value);
    if (isValid) {
      // Logic to send OTP to the provided number
      // Add your OTP sending functionality here
      alert("Sending OTP to: " + value);
    } else {
      // Handle invalid number scenario
      alert("Invalid phone number");
    }
  };

  return (
    <View>
      <View>
        <Image
          source={require("../../../assets/splash.png")}
          style={styles.logo}
        />
        <Image
          source={require("../../../assets/number.png")}
          style={styles.img}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Image
            source={require("../../../assets/back.png")}
            style={styles.back}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            navigation.navigate("Verify");
            handleSendOTP();
          }}>
            
          
          <Text style={{ color: "#ffffff", fontSize: 20, fontWeight: 400 }}>Send OTP</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 15 }}>
        <View>
          <Text style={{
            height: 24,
            top: 370,
            fontFamily: "Roboto",
            fontSize: 25,
            fontWeight: 400,
            lineHeight: 24.2,
            letterSpacing: 0,
            textAlign: "center",
          }}>Enter Your Mobile Number</Text>
        </View>
        <View>
          <Text style={{
            height: 24,
            top: 370,
            fontFamily: "Roboto",
            fontSize: 17.5,
            fontWeight: 400,
            lineHeight: 24.2,
            letterSpacing: 0,
            textAlign: "center",
            opacity: 0.65
          }}>We will send you a Confirmation Code</Text>
        </View>
      </View>
      <View>
        <StatusBar barStyle="dark-content" />
        <View style={styles.phoneInput}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="BD"
            layout="first"
            onChangeText={(text) => setValue(text)}
            withDarkTheme
            withShadow
            autoFocus
          />
        </View>
      </View>
      <Text
        style={{ alignSelf: "center", top: 612, color: "#000000", fontSize: 11, fontWeight: 400 }}>
        By continuing you agree to the terms and conditions.</Text>
    </View>
  );
};

export default Number;


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
    width: 171,
    height: 183,
    position: "absolute",
    top: 169,
    left: 113,
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
  },
  phoneInput: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: 124,
    // height: 17,
    top: 410,
    // left: 145,
    fontfamily: "Roboto",
    fontsize: 14,
    fontweight: 400,
    lineheight: 17,
    textalign: ' justified'



  },

  message: {
    position: 'absolute',
    top: 400,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }



});


