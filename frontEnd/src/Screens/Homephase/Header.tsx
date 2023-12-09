import React from "react";
import {
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-gesture-handler";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={require("../../../assets/splash.png")} style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Ionicons name="search-sharp" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer1}>
        <TouchableOpacity onPress={() => navigation.openDrawer("Profile")}>
          <FontAwesome5 name="user-circle" size={27} color="black" />
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    paddingVertical: 28,
  },
  iconContainer: {
    left: 105,
  },
  iconContainer1: {
    right: 25,
    bottom: 2,
  },
  logo: {
    width: 73,
    height: 26.8,
    justifyContent: "center",
    alignItems: "center",
    top: 3,
    left: 30,
  },
});
