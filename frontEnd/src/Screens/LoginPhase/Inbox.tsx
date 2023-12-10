import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Homephase/Header";
const InboxPage = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { id: 1, subject: "Meeting Reminder", content: "Don't forget the meeting tomorrow at 10 AM!" },
    { id: 2, subject: "New Offer", content: "Check out our latest offers for this season." },
    // ... more messages
  ]);

  const removeMessage = (id) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== id)
    );
  };

  const renderMessages = () => {
    return messages.map((message) => (
      <TouchableOpacity
        key={message.id}
        style={styles.messageCard}
        onPress={() => ({}) /* Handle message click */}
      >
        <View style={styles.messageInfo}>
          <Ionicons name="mail-open-outline" size={24} color="#034c71" />
          <View style={styles.messageText}>
            <Text style={styles.messageSubject}>{message.subject}</Text>
            <Text numberOfLines={2}>{message.content}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => removeMessage(message.id)}
        >
          <Ionicons name="trash-outline" size={24} color="#ff6347" style={{left: -25}} />
        </TouchableOpacity>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Header title="Inbox" navigation={navigation} />
      <ScrollView style={styles.messageContainer}>
        {renderMessages()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  messageContainer: {
    padding: 20,
  },
  messageCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  messageInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  messageText: {
    marginLeft: 10,
    flex: 1,
  },
  messageSubject: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#034c71",
  },
  deleteButton: {
    padding: 5,
  },
});

export default InboxPage;
