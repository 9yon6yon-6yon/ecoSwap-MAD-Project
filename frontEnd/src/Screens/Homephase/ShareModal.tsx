import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from "react-native-vector-icons/Ionicons";
const ShareModal = ({ isVisible, closeModal, product, shareOnSocialMedia }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={closeModal}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>
          Share "{product ? product.name : ''}" on:
        </Text>
        <View style={styles.socialMediaButtons}>
          <TouchableOpacity
            style={styles.socialMediaButton}
            onPress={() => shareOnSocialMedia('Facebook')}
          >
            <Ionicons name="logo-facebook" style={styles.buttonText}></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialMediaButton}
            onPress={() => shareOnSocialMedia('Twitter')}
          >
            <Ionicons name="logo-twitter" style={styles.buttonText}></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialMediaButton}
            onPress={() => shareOnSocialMedia('Instagram')}
          >
            <Ionicons name="logo-instagram" style={styles.buttonText}></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialMediaButton}
            onPress={() => shareOnSocialMedia('WhatsApp')}
          >
            <Ionicons name="logo-whatsapp" style={styles.buttonText}></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ShareModal;

const styles = {
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  socialMediaButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialMediaButton: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  
  buttonText: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'transparent',

  }
};
