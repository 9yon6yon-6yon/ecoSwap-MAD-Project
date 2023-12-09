import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import Header from "../Homephase/Header";
const Maps = ({ navigation }) => {
  const [pin, setPin] = useState({
    latitude: 23.8103,
    longitude: 90.4125,
  });
  const [region, setRegion] = useState({
    latitude: 23.8103,
    longitude: 90.4125,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [circleRadius, setCircleRadius] = useState(1000);

  const increaseRadius = () => {
    setCircleRadius(circleRadius + 200);
  };

  const decreaseRadius = () => {
    if (circleRadius > 0) {
      setCircleRadius(circleRadius - 200);
    }
  };
  const searchByRadius = () => {
    const currentRadius = circleRadius;
    fetch(`https://api.example.com/search?radius=${currentRadius}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Header title="Search" navigation={navigation} />

      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(data, details);
            if (details && details.geometry) {
              setRegion({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              });
              setPin({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
            }
          }}
          query={{
            key: "AIzaSyA25dC6-kD5wHBNF28wqR9Q9RzKlFctR4Q",
            language: "en",
            components: "country:bd",
          }}
          styles={{
            container: {
              width: "100%",
              paddingLeft: 10,
              paddingTop: 3,
              borderRadius: 20,
              backgroundColor: "#fff",
            },
            listView: { backgroundColor: "white" },
          }}
          currentLocation={false} // You might enable this based on your requirements
        />
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={region}
          // initialRegion={{
          //   latitude: region.latitude,
          //   longitude: region.longitude,
          //   latitudeDelta: region.latitudeDelta,
          //   longitudeDelta: region.longitudeDelta,
          // }}
          provider="google"
          showsUserLocation
          showsMyLocationButton
          followsUserLocation
          zoomEnabled
          zoomControlEnabled
        >
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
          />
          <Marker
            coordinate={pin}
            pinColor="black"
            draggable={true}
            onDragStart={(e) => {
              console.log("Drag start", e.nativeEvent.coordinate);
            }}
            onDragEnd={(e) => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
          >
            <Callout>
              <Text>I'm here</Text>
            </Callout>
          </Marker>
          <Circle
            center={pin}
            radius={circleRadius}
            fillColor="rgba(0, 0, 255, 0.3)"
            strokeColor="blue"
            strokeWidth={2}
          />
        </MapView>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Increse radius by 5km!</Text>
          <TouchableOpacity onPress={increaseRadius} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={searchByRadius} style={styles.button}>
            <Text style={styles.buttonTextSearch}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={decreaseRadius} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Decrese radius by 5km!</Text>
        </View>
      </View>
    </>
  );
};

export default Maps;

const styles = StyleSheet.create({
  searchContainer: {
    top: 50,
    left: 37,
    width: "80%",
    height: 50,
    borderRadius: 100,
    overflow: "hidden",
  },
  mapContainer: {
    flex: 1,
    position: "relative",
    width: "95%",
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
    left: 10,
  },
  map: {
    position: "relative",
    width: "95%",
    height: "45%",
    borderRadius: 100,
  },
  buttonContainer: {
    top: 30,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    width: 40,
    backgroundColor: "transparent",
    padding: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#42B92D",
  },
  text: {
    width: 110,
    height: 50,
    top: 30,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
  buttonTextSearch: {
    width: 75,
    height: 25,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
    borderRadius: 5,
    top: 2,
    backgroundColor: "black",
  }
});
