import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import "react-native-gesture-handler";

import "react-native-gesture-handler";
import Header from "./Header";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import TopSearches from "./TopSerches";
import Recommended from "./Recommended";

const Home = () => {
  const navigation = useNavigation();

  const images = [
    require("../../../assets/splash.png"),
    require("../../../assets/splash.png"),
    require("../../../assets/splash.png"),
    require("../../../assets/splash.png"),
  ];
  
  return (
    <>
      <Header title="Home" navigation={navigation} />
      <View
        style={{
          height: "30%",
          width: "100%",
        }}
      >
        <Text
          style={{
            left: 40,
            top: 10,
            fontSize: 14,
            fontWeight: "300",
            width: 65,
            height: 17,
          }}
        >
          Top Deals
        </Text>
        <SliderBox
          images={images}
          dotColor="#42B92D"
          inactiveDotColor="black"
          autoplay={true}
          autoPlayInterval={1000}
          circleLoop={true}
          onCurrentImagePressed={(index: number) => alert(index + 1)}
          sliderBoxHeight={300}
          ImageComponentStyle={{
            height: "85%",
            width: "80%",
            borderRadius: 10,
            overflow: "hidden",
          }}
          resizeMethod="resize"
          resizeMode="cover"
          ImageLoadingColor="#42B92D"
          dotStyle={{
            width: 11,
            height: 11,
            borderRadius: 50,
            marginHorizontal: -2,
          }}
          paginationBoxStyle={{
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 30,
            flexDirection: "row",
            flex: 1,
          }}
        />
      </View>
      <View style={{ height: "50%" }}>
        <Recommended title="Home" navigation={navigation} />
      </View>
      <View style={{height: "60%" }}>
        <TopSearches title="Home" navigation={navigation} />
      </View>
    </>
  );
};

export default Home;

const { width } = Dimensions.get("window");
const productWidth = width / 4;

const styles = StyleSheet.create({
  logo: {
    width: 73,
    height: 26.8,
    justifyContent: "center",
    alignItems: "center",
    top: 3,
    left: 30,
  },

  rowContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
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
    top: 40,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  productImage: {
    width: productWidth - 20,
    height: 100, // Adjust the height as needed
    resizeMode: "contain",
    borderRadius: 10,
  },
  imageContainer: {
    width: "50%",
    marginRight: 16,
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
    backgroundColor: "#42B92D",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    left: -20,
    height: 30,
  },
});
