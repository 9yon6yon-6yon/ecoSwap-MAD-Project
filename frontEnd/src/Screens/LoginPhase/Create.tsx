
import React from "react";
import { Text, View, TextInput, StyleSheet, Button, StatusBar, GestureResponderEvent } from "react-native";
import DocumentPicker from 'react-native-document-picker';
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const Create = () => {

    function selectDoc() {
        try {

            DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            })
                .then((docs) => {
                    console.log('Selected documents:', docs);
                })
                .catch((err) => {
                    console.log('Error picking documents:', err);
                });
        } catch (err) {
            console.log('DocumentPicker error:', err);
        }
    }

    return (

        <View style={{ flex: 1, alignItems: 'center' }}>
            <TextInput

                placeholder='Enter name'
                keyboardType='default'
                placeholderTextColor='#000000'
                style={Styles.textInputName}

            >

            </TextInput>
            <TextInput

                placeholder='Add Info'
                keyboardType='default'
                placeholderTextColor='#000000'
                style={Styles.textInputInfo}

            >

            </TextInput>
            <TextInput

                placeholder='Condition'
                keyboardType='default'
                placeholderTextColor='#000000'
                style={Styles.textInputCondition}

            >

            </TextInput>
            <TextInput

                placeholder='Others'
                keyboardType='default'
                placeholderTextColor='#000000'
                style={Styles.textInputOthers}

            >

            </TextInput>
            <TextInput

                placeholder='Description'
                keyboardType='default'
                placeholderTextColor='#000000'
                style={Styles.textInputDescription}

            >

            </TextInput>

            <TouchableOpacity
                onPress={selectDoc}
                containerStyle={Styles.white}
            >

                <FontAwesome5 style={{ left: 50 }} name="plus" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={selectDoc}
                containerStyle={Styles.white2}
            >
                <FontAwesome5 style={{ left: 78 }} name="plus" size={20} color="white" />
            </TouchableOpacity>
            <View style={Styles.buttonContainer}>
                <TouchableOpacity
                    onPress={selectDoc}
                    containerStyle={Styles.buttonSubmit}
                >
                    <Text >Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={selectDoc}
                    containerStyle={Styles.buttonCancel}
                >
                    <Text>Cancel</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Create;


const Styles = StyleSheet.create({
    textInputName: {
        backgroundColor: '#D9D9D9',
        width: 305,
        height: 27,
        borderRadius: 5,
        paddingLeft: 15,
        top: 205



    },
    textInputInfo: {
        backgroundColor: '#D9D9D9',
        width: 305,
        height: 54,
        borderRadius: 8,
        paddingLeft: 15,
        top: 225,
        paddingBottom: 15,

    },
    textInputCondition: {
        backgroundColor: '#D9D9D9',
        width: 144,
        height: 27,
        borderRadius: 5,
        paddingLeft: 15,
        top: 245,
        right: 80,
    },
    textInputOthers: {
        backgroundColor: '#D9D9D9',
        width: 144,
        height: 27,
        borderRadius: 5,
        paddingLeft: 15,
        top: 217.7,
        left: 80,

    },
    textInputDescription: {
        backgroundColor: '#D9D9D9',
        width: 305,
        height: 112,
        borderRadius: 8,
        paddingLeft: 15,
        top: 240,
        paddingBottom: 65,
    },


    white: {
        backgroundColor: '#D9D9D9',
        width: 150,
        height: 71,
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        bottom: 140,
        right: 77,

    },
    white2: {
        backgroundColor: '#D9D9D9',
        width: 153,
        height: 72,
        borderRadius: 10,
        bottom: 211,
        left: 77,
        justifyContent: 'center',
        alignContent: 'center',
    },

    buttonContainer: {
        width: 305,
        height: 54,
        radius: 5,
        top: 160,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#E6E6E6',

    },
    buttonSubmit: {
        width: 103,
        height: 26,
        left: 25,
        backgroundColor: '#42B92D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 10,
        shadowColor: 'green',
        shadowOffset: {
            width: 0,
            height: 2,
            left: 25,
            top: 25,
            right: 25,
        }

    },
    buttonCancel: {
        width: 103,
        height: 26,
        right: 25,
        backgroundColor: '#FF0000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 10,
        shadowColor: 'red',

    }

})

