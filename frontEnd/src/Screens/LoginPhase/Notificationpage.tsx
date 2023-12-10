import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Homephase/Header";

const Notificationpage = ({ navigation }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Notification 1 " },
    { id: 2, message: "Notification 2 " },
    { id: 3, message: "Notification 3 " },
    // ... additional notifications
  ]);

  const [selectedNotification, setSelectedNotification] = useState(null);

  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const handleNotificationPress = (notification) => {
    setSelectedNotification(notification);
  };

  const renderNotifications = () => {
    return notifications.map((notification) => (
      <TouchableOpacity
        key={notification.id}
        style={styles.notification}
        onPress={() => handleNotificationPress(notification)}
      >
        <Ionicons name="notifications" size={24} color="#034c71" />
        <Text style={styles.notificationText}>{notification.message}</Text>
        <TouchableOpacity
          style={styles.dismissButton}
          onPress={() => removeNotification(notification.id)}
        >
          <Ionicons name="trash-outline" size={24} color="red" />
        </TouchableOpacity>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Header title="Cart" navigation={navigation} />
      <ScrollView style={styles.notificationContainer}>
        {renderNotifications()}
      </ScrollView>
      <Modal
        visible={selectedNotification !== null}
        transparent={true}
        animationType="fade"
      >
        <TouchableWithoutFeedback onPress={() => setSelectedNotification(null)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              {selectedNotification && (
                <View>
                  {/* Customize your modal content here */}
                  <Ionicons name="notifications-outline" size={40} color="#034c71" style={styles.modalIcon} />
                  <Text style={styles.modalText}>
                    {selectedNotification.message}
                  </Text>
                  <TouchableOpacity
                    onPress={() => setSelectedNotification(null)}
                  >
                    <Text style={styles.closeButton}>Close</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  notificationContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  notification: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 4,
  },
  notificationText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#444",
  },
  dismissButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    fontSize: 16,
    color: "#034c71",
    textAlign: "center",
  },
  modalIcon: {
    justifyContent: "center",
    alignItems: "center",
    left: 35,
    top:-8
  }
});

export default Notificationpage;
