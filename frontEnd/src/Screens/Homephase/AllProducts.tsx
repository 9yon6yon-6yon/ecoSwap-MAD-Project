import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ShareModal from "./ShareModal";
import Ratings from "./Ratings";

const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Description for Product 1",
    image: "./splash.png",

  },
  {
    id: 2,
    title: "Product 3",
    description: "Description for Product 2",
    image: "./splash.png", 
   
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for Product 4",
    image: "./splash.png", 
   
  },
  {
    id: 4,
    title: "Product 4",
    description: "Description for Product 4",
    image: "./splash.png", 
   
  },
  {
    id: 5,
    title: "Product 5",
    description: "Description for Product 5",
    image: "./splash.png", 
   
  },
  {
    id: 6,
    title: "Product 6",
    description: "Description for Product 6",
    image: "./splash.png", 
   
  },
  {
    id: 7,
    title: "Product 7",
    description: "Description for Product 7",
    image: "./splash.png", 
   
  },
  {
    id: 8,
    title: "Product 8",
    description: "Description for Product 8",
    image: "./splash.png", 
   
  },
  {
    id: 9,
    title: "Product 9",
    description: "Description for Product 9",
    image: "./splash.png", 
   
  },
  {
    id: 10,
    title: "Product 10",
    description: "Description for Product 10",
    image: "./splash.png", 
   
  },
  {
    id: 11,
    title: "Product 11",
    description: "Description for Product 11",
    image: "./splash.png", 
   
  },

];

const ProductCard = ({ product }: { product: Product }) => {
  function handleAddToCart(product: Product): void {
    throw new Error("Function not implemented.");
  }

  const [givenRating, setGivenRating] = useState(null);

  const handleRatingChange = (value) => {

    setGivenRating(value);

  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sharedProduct, setSharedProduct] = useState(null);


  const handleShare = (product) => {
    setSharedProduct(product);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const shareOnSocialMedia = (socialMedia) => {
    console.log(`Shared on ${socialMedia}`);
    setIsModalVisible(false);
  };

  function handleMesseging(product: Product): void {
    throw new Error("Function not implemented.");
  }

  const navigation = useNavigation();
  return (
    <>
      <ShareModal
        isVisible={isModalVisible}
        closeModal={closeModal}
        product={sharedProduct}
        shareOnSocialMedia={shareOnSocialMedia}
      />
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          {/* Other product details */}
          <Ratings givenRating={givenRating} onChangeRating={handleRatingChange} />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button3}
              onPress={() => handleMesseging(product)}
            >
              <Ionicons name="chatbubbles-outline" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => handleShare(product)}
            >
              <Ionicons name="share-social-outline" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => handleAddToCart(product)}
            >
              <Ionicons name="cart-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const ProductList = () => {
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    width: Dimensions.get("window").width / 2 - 10, // Accounting for margin
    height: Dimensions.get("window").width * 0.75, // Total height of the card
    margin: 5,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  imageContainer: {
    width: "100%",
    height: "50%", // 50% for image
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  details: {
    position: "absolute",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50%", // 50% for product details
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  buttonsContainer: {
    width: "40%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    top: 170,
    left: -25,
  },
  button1: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    left: -50,
  },
  button2: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    left: -70,
  },
  button3: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    left: -25,
  },
});
const AllProducts = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header title="Search" navigation={navigation} />
      <View style={{ flex: 1 }}>
        <ProductList />
      </View>
    </>
  );
};

export default AllProducts;
