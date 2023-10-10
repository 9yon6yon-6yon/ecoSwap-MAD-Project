import React from "react";
import {View, Text, StyleSheet} from "react-native";

const App = () =>{
 return(
  <View style={styles.mainContainer}>
    <Text style={styles.textContainer}>Hello World! ওহে দুনিয়া </Text>
  </View>
 )
}

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