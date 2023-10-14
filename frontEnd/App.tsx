import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CounterPage from "./src/pages/CounterPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./src/pages/LoginPage";

const stack = createStackNavigator();
const App = () => {
  return (
  // <View style={styles.mainContainer}>
  //   <Text style={styles.textContainer}>Hello World! ওহে দুনিয়া </Text>
  // </View>

  <NavigationContainer>
    <stack.Navigator>
        <stack.Screen name = "Counter" component={CounterPage}/>
        <stack.Screen name = "Login" component={LoginPage}/>
    </stack.Navigator>
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