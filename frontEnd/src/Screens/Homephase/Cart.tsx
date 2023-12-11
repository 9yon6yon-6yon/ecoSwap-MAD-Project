import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "./Header";
import { BACKEND_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";


const Cart = ( ) => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Product 1",
      description: "Description for Product 1",
    },
    {
      id: 2,
      title: "Product 3",
      description: "Description for Product 2",
    },
  ]);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`${BACKEND_URL}/carts/${itemId}`);

      setCartItems((prevItems) => prevItems.filter((item) => item.cart_id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  
 
  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/carts/user/1`);
        setCartItems(response.data);
        console.log('Axios response:', response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };
    fetchCarts();
  }, []);


  const renderCartItems = () => {
    return cartItems.map((item) => (
      <View key={item.id} style={styles.productCard}>
        <TouchableOpacity
          style={styles.deleteIcon}
          onPress={() => handleDelete(item.id)}
        >
          <Ionicons name="trash-outline" size={24} color="red" />
        </TouchableOpacity>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    ));

  };

  return (
    <>
      <Header title="Cart" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.title}>My Cart</Text>
          <View style={styles.productListContainer}>{renderCartItems()}</View>
          <View style={styles.cartDetailsCard}>

            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,

  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  productListContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cartDetailsCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
  },
  checkoutButton: {
    backgroundColor: "#034c71",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutText: {
    color: "yellow",
    fontSize: 18,
  },
  productCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    height: 250,
  },
  deleteIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1,
  },
});

export default Cart;
