import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  StatusBar,
  GestureResponderEvent,
  Image,
} from "react-native";
import Modal from 'react-native-modal';
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Header from "../Homephase/Header";
import { useNavigation } from "@react-navigation/native";
import DocumentPicker from "react-native-document-picker";
import * as ImagePicker from "expo-image-picker";
import { BACKEND_URL } from "@env";
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";


const Create = () => {
  const navigation = useNavigation();
  const [pName, setpName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const SuccessModal = ({ isVisible, onClose }) => {
    return (
      <Modal isVisible={isVisible} animationIn="fadeIn" animationOut="fadeOut">
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Sucess</Text>
          <Text style={{ textAlign: 'center' }}>Listing created successfully</Text>
          <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
            <Text style={{ color: 'blue', fontSize: 16 }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleSubmit = async () => {
    try {
      console.log(`${BACKEND_URL}/listings`);
      const response = await axios.post(`${BACKEND_URL}/listings`, {
        user_id: 1,
        product_name: pName,
        description,

      });
      console.log(response.data);
      setIsSuccessModalVisible(true);
    } catch (error) {

      console.error('Error registering user:', error);
    }
    navigation.goBack();
  };

  return (
    <>
      <Header title="Search" navigation={navigation} />
      <View style={{ flex: 1, alignItems: "center", bottom: 50 }}>
        <SuccessModal isVisible={isSuccessModalVisible} onClose={() => setIsSuccessModalVisible(false)} />
        <TextInput
          placeholder="Enter Title"
          keyboardType="default"
          placeholderTextColor="#000000"
          onChangeText={setpName}
          value={pName}
          style={Styles.textInputName}
        ></TextInput>
        <TextInput
          placeholder="Description"
          keyboardType="default"
          placeholderTextColor="#000000"
          onChangeText={setDescription}
          value={description}
          style={Styles.textInputDescription}
        ></TextInput>

        <TouchableOpacity onPress={pickImage} containerStyle={Styles.white}>
          <View style={Styles.imageInputContainer}>
            <TextInput
              value={imageName}
              onChangeText={(text) => setImageName(text)}
              placeholder="Enter image name"
              placeholderTextColor={'white'}
              style={Styles.imageInput}
            />
            <TouchableOpacity onPress={pickImage} style={Styles.addButton}>
              <Ionicons name="add" style={Styles.addButtonText} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <View style={Styles.buttonContainer}>
          <TouchableOpacity containerStyle={Styles.buttonSubmit} onPress={handleSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity><TouchableOpacity containerStyle={Styles.buttonCancel} onPress={handleCancel}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Create;

const Styles = StyleSheet.create({
  textInputName: {
    backgroundColor: "#D9D9D9",
    width: 305,
    height: 27,
    borderRadius: 5,
    paddingLeft: 15,
    top: 205,
  },
  textInputInfo: {
    backgroundColor: "#D9D9D9",
    width: 305,
    height: 54,
    borderRadius: 8,
    paddingLeft: 15,
    top: 225,
    paddingBottom: 15,
  },
  textInputCondition: {
    backgroundColor: "#D9D9D9",
    width: 144,
    height: 27,
    borderRadius: 5,
    paddingLeft: 15,
    top: 245,
    right: 80,
  },
  textInputOthers: {
    backgroundColor: "#D9D9D9",
    width: 144,
    height: 27,
    borderRadius: 5,
    paddingLeft: 15,
    top: 217.7,
    left: 80,
  },
  textInputDescription: {
    backgroundColor: "#D9D9D9",
    width: 305,
    height: 112,
    borderRadius: 8,
    paddingLeft: 15,
    top: 240,
    paddingBottom: 65,
  },

  white: {
    backgroundColor: "#D9D9D9",
    width: 305,
    height: 45,
    borderRadius: 20,
    justifyContent: "center",
    alignContent: "center",
    bottom: 140,
    marginTop:100
  },

  buttonContainer: {
    width: 305,
    height: 54,
    radius: 5,
    top: 160,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#E6E6E6",
  },
  buttonSubmit: {
    width: 103,
    height: 26,
    left: 25,
    backgroundColor: "#42B92D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    elevation: 10,
    shadowColor: "green",
    shadowOffset: {
      width: 0,
      height: 2,
      left: 25,
      top: 25,
      right: 25,
    },
  },
  buttonCancel: {
    width: 103,
    height: 26,
    right: 25,
    backgroundColor: "#FF0000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    elevation: 10,
    shadowColor: "red",
  },
  
addButtonText: {
    color: "black",
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
    top: -3,
  },
imageInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
 imageInput: {
    flex: 1,
    backgroundColor: "#034c71",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginRight: 10,
    height: 40,
    top: 10
    
  },
addButton: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    top:10,
    left:-2
  },
});
