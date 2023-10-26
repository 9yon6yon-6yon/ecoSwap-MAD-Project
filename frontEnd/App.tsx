import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignUp from "./src/pages/SignUp";
import LoginPage from "./src/pages/LoginPage";


const stack = createStackNavigator();
const bottom_tab = createBottomTabNavigator();

const IndexPage = () =>{
  return (
    <stack.Navigator screenOptions={{ headerShown:false }}>
     <stack.Screen name="Index" component={LoginPage} /> 
     <stack.Screen name="Register" component={SignUp} />   
    </stack.Navigator>
  )
}

const App = () => {
  return(
    <NavigationContainer>
      <bottom_tab.Navigator> 
      <bottom_tab.Screen  name="Dashboard" component={IndexPage} />
      </bottom_tab.Navigator> 
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

})

export default App;