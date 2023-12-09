import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import Swiper from "react-native-swiper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Cart from "./Cart";
import ShareModal from "./ShareModal";
import { useState } from "react";

const TopSearches = () => {
  const navigation = useNavigation();
  const productList = [
    { id: 1, name: "Product 1", price: 10, image: require("../../../assets/splash.png") },
    { id: 2, name: "Product 2", price: 10, image: require("../../../assets/splash.png") },
    { id: 3, name: "Product 3", price: 10, image: require("../../../assets/splash.png") },
    { id: 4, name: "Product 4", price: 10, image: require("../../../assets/splash.png") },
    { id: 6, name: "Product 6", price: 10, image: require("../../../assets/splash.png") },
    { id: 7, name: "Product 7", price: 10, image: require("../../../assets/splash.png") },
    { id: 8, name: "Product 8", price: 10, image: require("../../../assets/splash.png") },
    // Add more products as needed
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sharedProduct, setSharedProduct] = useState(null);

  // ... (other parts of your code)

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

  const renderProduct = (product) => (
    <View key={product.id} style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.productImage} />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>$ {product.price}</Text>
      </View>
      {/* Ratings display */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleShare(product)}
        >
          <Ionicons name="share-social-outline" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddToCart(product)}
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

  const chunkedProducts = chunkArray(productList, 3);

  const handleAddToCart = (): void => {
    navigation.navigate("Cart");
  };

  return (
    <>
      <ShareModal
        isVisible={isModalVisible}
        closeModal={closeModal}
        product={sharedProduct}
        shareOnSocialMedia={shareOnSocialMedia}
      />
      <Text
        style={{
          left: 40,
          top: -28,
          fontSize: 14,
          fontWeight: "300",
          width: 100,
          height: 17,
        }}
      >
        Recommended
      </Text>
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
              style={{ top: 55, left: 35 }}
              name="chevron-forward-circle-outline"
              size={24}
              color="black"
            />
          }
          prevButton={
            <Ionicons
              style={{ top: 55, right: 35 }}
              name="chevron-back-circle-outline"
              size={24}
              color="black"
            />
          }
          showsButtons={true}
          showsPagination={false}
          autoplay
          autoplayTimeout={3}
        >
          {chunkedProducts.map((productGroup, index) => (
            <View key={index} style={styles.rowContainer}>
              {productGroup.map((product) => renderProduct(product))}
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
    top: 60,
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
});

function handleShare(product: any): void {
  throw new Error("Function not implemented.");
}
