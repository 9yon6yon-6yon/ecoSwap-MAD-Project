import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput,Button } from "react-native";
import axios from "axios";

const NationalizePage = () => {
    const [nationality, setNationality] = useState('');
    const [userName, setUserName] = useState('');

    const handleSubmit =()=>{
        console.log(userName)
        axios.get(`https://api.nationalize.io?name=${userName}`).then((res)=>{
            if(res.data.country.length){
                setNationality(res.data.country[0]["country_id"])
            }
          
        })

    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText}>
                {nationality}
            </Text>
            <View>
                <TextInput style={styles.inputStyle}
                    value={userName}
                    onChangeText={setUserName}
                    placeholder="Enter your username"
                />
            </View>
            <Button title="Submit" onPress={handleSubmit}></Button>
        </View>
    );
}



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    mainText: {
        fontSize: 80,
        fontWeight: "700",
        color: 'red'
    },
    inputStyle:{
        height :40,
        margin:12,
        borderWidth:1,
        padding:10,
        borderRadius:10,
    }
})
export default NationalizePage;