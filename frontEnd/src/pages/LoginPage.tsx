import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { IAUthContext } from '../providers/AuthProvider';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleLogin = (auth: IAUthContext) => {
    axios.get("https://localhost:3000/health").then((res:any)=>{
      console.log(res)
    })

    console.log('Username: ', username);
    console.log('Password: ', password);
    if (username === "Asif" && password === "admin") {
      setisLoggedIn(true);
    }
    else {
      setisLoggedIn(false);
    }
  };
  const navigate = useNavigation();
  const showLoginPage = () => {
    return (
      <>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <Button title="Login" onPress={handleLogin} />
      </>
    )
  };
  const showSuccessMessage = () => {
    return (
      <>
        <Text style={styles.label}> Successfully Logged in brother....</Text>

      </>
    )
  };

  return (

    <View style={styles.container}>
      {!isLoggedIn ? showLoginPage(): showSuccessMessage()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default LoginPage;

