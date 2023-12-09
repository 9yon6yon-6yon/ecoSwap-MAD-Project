import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Profile = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    console.log("Logout pressed");
  };
  return (
    <><Header title="Search" navigation={navigation} /><View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profilePicture}></View>
        <View style={styles.verticalLine}></View>
        <View style={styles.profileInfo}>
          <Text style={styles.userName}>Name :</Text>
          <Text style={styles.userBalance}>Balance :</Text>
          <Text style={styles.userDescription}>Description :</Text>
          <TouchableOpacity>
            <Text style={styles.userEdit}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Current Deals</Text>
        {/* <View style={styles.productContainer}>
      <Image source={require("./laptop1.png")} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>Product Name</Text>
        <Text style={styles.productPrice}>$10.99</Text>
        <TouchableOpacity>
          <FontAwesome name="heart" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View> */}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>History</Text>
        <View style={styles.productContainer}>
          {/* <Image source={require("./laptop1.png")} style={styles.productImage} />
    {/* <View style={styles.productInfo}>
      <Text style={styles.productName}>Product Name</Text>
      <Text style={styles.productPrice}>$9.99</Text>
      <TouchableOpacity>
        <FontAwesome name="heart" size={24} color="red" />
      </TouchableOpacity>
    </View> */}
        </View>
      </View>
    </View></>
  );
};


export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,

  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    left: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: "#ccc",
  },
  verticalLine: {
    width: 1,
    height: "100%",
    backgroundColor: "#ccc",
    marginHorizontal: 16,
    left: 5,
  },
  profileInfo: {
    flex: 1,
    left: 5,
  },
  userName: {
    fontSize: 14,
    fontWeight: "300",
    marginBottom: 8,
  },
  userBalance: {
    fontSize: 14,
    fontWeight: "300",

    marginBottom: 8,
  },
  userDescription: {
    fontSize: 14,
    fontWeight: "300",

    marginBottom: 8,
  },
  userEdit: {
    fontSize: 14,
    color: "#42B92D",
  },
  sectionContainer: {
    marginTop: 70,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "300",
    marginBottom: 20,
    marginLeft: 30,
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,

  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 14,
    marginBottom: 8,
  },
  logoutButton: {
    backgroundColor: "#FF0000",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  }

});