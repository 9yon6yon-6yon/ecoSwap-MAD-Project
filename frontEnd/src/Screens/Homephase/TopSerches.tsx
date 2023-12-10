import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Dimensions, FlatList } from "react-native";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import Swiper from "react-native-swiper";
import Ionicons from "react-native-vector-icons/Ionicons";
import ShareModal from "./ShareModal";
import { BACKEND_URL } from "@env";
import axios from "axios";
const TopSearches = () => {
  const navigation = useNavigation();
  const [listings, setListings] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sharedProduct, setSharedProduct] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/listings/all`);
        setListings(response.data);
        console.log('Axios response:', response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };
    fetchListings();
  }, []);

  const handleShare = (listing) => {
    setSharedProduct(listing);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const shareOnSocialMedia = (socialMedia) => {
    console.log(`Shared on ${socialMedia}`);
    setIsModalVisible(false);
  };

  const renderProduct = (listing) => (
    <View key={listing.listingid} style={styles.productContainer}>
      {/* Adjust the image source based on your actual data structure */}
      <Image source={{ uri: listing.photos }} style={styles.productImage} />
      {listing && (
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{listing.product_name}</Text>
          <Text style={styles.productPrice}>{listing.description}</Text>
        </View>
      )}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleShare(listing)}
        >
          <Ionicons name="share-social-outline" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddToCart(listing)}
        >
          <Ionicons name="cart-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const chunkArray = (array, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const chunkedProducts = chunkArray(listings, 3);

  return (
    <>
     <ShareModal
        isVisible={isModalVisible}
        closeModal={closeModal}
        product={sharedProduct}
        shareOnSocialMedia={shareOnSocialMedia}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            left: 40,
            top: -200,
            fontSize: 14,
            fontWeight: "300",
            width: 100,
            height: 17,
          }}
        >
          Top Searches
        </Text>
        <Text
          style={{
            left: 35,
            top: -200,
            fontSize: 14,
            fontWeight: "300",
            width: 100,
            height: 17,
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
            onPress={() => {
              navigation.navigate("AllProducts");
            }}
          />
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          top: -180,
          marginHorizontal: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Swiper
          nextButton={
            <Ionicons
              style={{ top: -140, left: 35 }}
              name="chevron-forward-circle-outline"
              size={24}
              color="black"
            />
          }
          prevButton={
            <Ionicons
              style={{ top: -140, right: 35 }}
              name="chevron-back-circle-outline"
              size={24}
              color="black"
            />
          }
          showsButtons={true}
          showsPagination={false}
          autoplay
        >
          {chunkedProducts.map((chunk, index) => (
            <View key={index} style={styles.rowContainer}>
              {chunk.map((listing) => renderProduct(listing))}
            </View>
          ))}
        </Swiper>
      </View>
    </>
  );
};

const { width } = Dimensions.get("window");
const productWidth = width / 3.8;

export default TopSearches;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    top: -180,
  },
  productContainer: {
    width: productWidth,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: -20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: 180,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    top: 40,
  },

  productImage: {
    width: productWidth - 20,
    height: "55%", // Adjust the height as needed
    resizeMode: "contain",
    borderRadius: 10,
    left: 8,
  },
  imageContainer: {
    width: "100%",
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
    height: "55%",
  },
  productDetails: {
    flex: 1,
    width: "50%",
    left: -15,
    top: -15,
    height: "100%",
  },
  productName: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
  },
  buttonsContainer: {
    width: "40%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
  },
  button: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    left: -25,
    height: "100%",
    width: "100%",
  },
})




function handleAddToCart(product: any): void {
  throw new Error("Function not implemented.");
}