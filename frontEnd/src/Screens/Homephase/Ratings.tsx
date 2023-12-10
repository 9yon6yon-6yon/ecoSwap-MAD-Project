import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const Ratings = ({ givenRating, onChangeRating }) => {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [showHoverFeedback, setShowHoverFeedback] = useState(false);
    const timeoutRef = useRef(null);
  
    const handleMouseEnter = (value) => {
      setHoveredRating(value);
      setShowHoverFeedback(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  
    const handleMouseLeave = () => {
      setHoveredRating(0);
      if (!showHoverFeedback) {
        timeoutRef.current = setTimeout(() => {
          setShowHoverFeedback(true);
        }, 3000); // Delay to hide hover feedback after 3 seconds when mouse leaves star area
      }
    };
  
    const handleRatingClick = (value) => {
      onChangeRating(value);
      setRating(value);
      setShowHoverFeedback(true); // After clicking, keep the hover feedback visible
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  
    const descriptions = ['Useless 😞', 'Poor 😕', 'OK 😐', 'Good 🙂', 'Excellent 😃'];
  
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= (givenRating !== null ? givenRating : rating);
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleRatingClick(i)}
          onPressIn={() => handleMouseEnter(i)}
          onPressOut={handleMouseLeave}
        >
          <Text style={isFilled ? styles.starFilled : styles.starOutline}>&#9733;</Text>
        </TouchableOpacity>
      );
    }
  
    return (
      <View style={styles.rating}>
        <View style={styles.starsContainer}>
          {stars}
        </View>
        {showHoverFeedback && hoveredRating > 0 && (
          <View style={styles.hoverFeedback}>
            <Text>{descriptions[hoveredRating - 1]}</Text>
          </View>
        )}
      </View>
    );
  };
export default Ratings;
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
  rating: {
    flexDirection: "row",
    top: 175,
    left: -25,
    alignItems: "center",
    justifyContent: "center",
  },
  starFilled: {
    fontSize: 24,
    color: "gold",
  },
  starOutline: {
    fontSize: 24,
    color: "#ccc",
  },
  starsContainer: {
    flexDirection: "row",
  },
  hoverFeedback: {
    position: "absolute",
    right: 0,
    top: 0,
    alignItems: "flex-start",
    backgroundColor: "#fff",
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    zIndex: 1,
    interval: 1000,
  },
});
