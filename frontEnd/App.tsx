import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CounterPage from "./src/pages/CounterPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./src/pages/LoginPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsPage from "./src/pages/SettingsPage";
import NationalizePage from "./src/pages/NationalizePage";

const stack = createStackNavigator();
const bottom_tab = createBottomTabNavigator();
const BasicDashboardScreen = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Counter" component={CounterPage} />
      <stack.Screen name="Login" component={LoginPage} />
    </stack.Navigator>
  )
}
const App = () => {
  return (
    // <View style={styles.mainContainer}>
    //   <Text style={styles.textContainer}>Hello World! ওহে দুনিয়া </Text>
    // </View>

    <NavigationContainer>
      <bottom_tab.Navigator>    
         < bottom_tab.Screen name="Dashboard" component={BasicDashboardScreen} />
         < bottom_tab.Screen name="Settings" component={SettingsPage} />
         < bottom_tab.Screen name="Nationalize" component={NationalizePage} />

      </bottom_tab.Navigator>
    </NavigationContainer>



    // <CounterPage/>
  )
}
//comment
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    fontWeight: "700",
    fontSize: 16,
    color: "red"
  }
})

export default App;