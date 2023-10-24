import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    console.log('Username: ', username);
    console.log('Password: ', password);


  };

  return 
};

const styles = StyleSheet.create({
  input: {
    width: 308,
    height:52,
    flex: 0,
    borderRadius: 35,
    backgroundColor: "#E6E6E6",

  },
 
});