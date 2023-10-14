import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";


const CounterPage = (props:any) => {

    const [counter, setCounter] = useState(0); // REACT HOOK!!!!!!!

    const increase = () => {
        setCounter(counter + 1);

        console.log("Current calue :", counter);
    }

    const decrease = () => {
        setCounter(counter - 1);
        console.log("Current calue :", counter);
    }
    const reset = () => {
        setCounter(0);
    }
    const navHandler = () => {
        props.navigation.navigate("Login")
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textContainer}>{counter}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Increase" onPress={increase} />
                <Button title="Decrease" onPress={decrease} />
                <Button title="Reset" onPress={reset} />
            </View>

            <View>
                <Button title="LOGIN" onPress={navHandler}></Button>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        fontSize: 80,
        fontWeight: "700",
        color: 'red'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default CounterPage;