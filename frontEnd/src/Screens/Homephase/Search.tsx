import React, { useEffect, useState } from "react";

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "./Header";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchProducts from "./SearchProducts";
import { useNavigation } from "@react-navigation/native";
import { BACKEND_URL } from "@env";
import axios from "axios";
const Search = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const performSearch = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/listings/search`, {
          params: { keyword: searchText },
        });
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error searching:', error);
      } finally {
        setLoading(false);
      }
    };

    <SearchProducts title="Search" navigation={navigation} />
    performSearch();




  }, [searchText]);

  return (
    <>
      <Header title="Search" navigation={navigation} />
      <View style={styles.asembler}>
        <View style={styles.container}>
          <TextInput
            placeholder="Search"
            keyboardType="default"
            placeholderTextColor="#000000"
            style={styles.input}
            onChangeText={(text) => setSearchText(text)}

          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Ionicons
              name="search"
              size={20}
              color="#000000"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontWeight: "300",
            fontSize: 14.5,
            marginLeft: 10,
            color: "black",
          }}
        >
          Searched Products
        </Text>
        <Text
          style={{
            fontWeight: "300",
            fontSize: 14.5,
            color: "black",
            left: -10,
          }}
          onPress={() => {
            navigation.navigate("AllProducts")
          }}
        >
          All
          <Ionicons
            name="enter-outline"
            size={20}
            color="blue"
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              justifyContent: "center",
            }}
          />
        </Text>
      </View>
      <View style={{ flex: 1, marginTop: 5 }}>
        {loading ? (
                 <Text>Nothing to show</Text> 
        ) : (
       <SearchProducts title="Search" navigation={navigation} />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    width: 250,
    height: 35,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: "center",
  },
  input: {
    marginLeft: 10,
    marginTop: 3,
    bottom: 2.5,
  },
  asembler: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    height: 35,
    width: 60,
    backgroundColor: "#E6E6E6",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default Search;
