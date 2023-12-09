import React from "react";
import {
  Animated,
  Dimensions,
  Platform,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import Welcome from "./Screens/LoginPhase/Welcome";
import Index from "./Screens/LoginPhase/Index";
import Signup from "./Screens/LoginPhase/Signup";
import Number from "./Screens/LoginPhase/Number";
import Verify from "./Screens/LoginPhase/Verify";
import Verified from "./Screens/LoginPhase/Verified";
import Login from "./Screens/LoginPhase/Login";
import Home from "./Screens/Homephase/Home";
import Create from "./Screens/LoginPhase/Create";
import Inbox from "./Screens/LoginPhase/Inbox";
import Maps from "./Screens/LoginPhase/Maps";
import Notificationpage from "./Screens/LoginPhase/Notificationpage";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import EditProfile from "./Screens/Homephase/EditProfile";
import Search from "./Screens/Homephase/Search";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./Screens/Homephase/Profile";
import { Header } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const BottomTab = () => {
  const tabOffsetValue = React.useRef(new Animated.Value(0)).current;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#000000",
          height: 64,
        },
      }}
      tabBarOptions={{
        style: {
          backgroundColor: "#ffffff",
          height: 64,
        },
        // You can add more options like label style, icon style, etc.
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="home"
                size={23}
                color={focused ? "#42B92D" : "#ffffff"}
              ></FontAwesome5>
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          },
        })}
      ></Tab.Screen>

      <Tab.Screen
        name={"Map"}
        component={Maps}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="map-marker-alt"
                size={23}
                color={focused ? "#42B92D" : "#ffffff"}
              ></FontAwesome5>
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true,
            }).start();
          },
        })}
      ></Tab.Screen>

      <Tab.Screen
        name={"Create"}
        component={Create}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 70,
                height: 73,
                backgroundColor: "#42B92D",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                name="plus"
                size={23}
                color={focused ? "black" : "#ffffff"}
              ></FontAwesome5>
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true,
            }).start();
          },
        })}
      ></Tab.Screen>

      <Tab.Screen
        name={"Notifications"}
        component={Notificationpage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="bell"
                size={23}
                color={focused ? "#42B92D" : "#ffffff"}
              ></FontAwesome5>
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true,
            }).start();
          },
        })}
      ></Tab.Screen>

      <Tab.Screen
        name={"Inbox"}
        component={Inbox}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="inbox"
                size={23}
                color={focused ? "#42B92D" : "#ffffff"}
              ></FontAwesome5>
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true,
            }).start();
          },
        })}
      ></Tab.Screen>
      {/* <Tab.Screen name={"Search"} component={Search} /> */}
    </Tab.Navigator>
  );
};
const CustomLogoutButton = ({ navigation }) => {
  const handleLogout = () => {
    // Perform logout actions (clear session, etc.)
    // For demonstration purposes, show an alert and navigate to Login screen
    Alert.alert(
      'Logged Out',
      'You have been logged out.',
      [{ text: 'OK', onPress: () => navigation.navigate('Login') }],
      { cancelable: false }
    );
  };

  return (
    <View>
      <Text style = {styles.logoutText} onPress={handleLogout}>Logout</Text>
      {/* You can style this text/button as needed */}
    </View>
  );
};
const Routes = () => {
  
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "#ffffff" },
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Number" component={Number} />
          <Stack.Screen name="Verify" component={Verify} />
          <Stack.Screen name="Verified" component={Verified} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home">
            {() => (
              <Drawer.Navigator
                drawerContentOptions={{ overlayColor: "transparent" }}
                screenOptions={{
                  headerShown: false,
                  drawerPosition: "right",
                  drawerInactiveBackgroundColor: "transparent",
                  drawerActiveBackgroundColor: "transparent",
                  drawerInactiveTintColor: "black",
                  drawerActiveTintColor: "#42B92D",
                  drawerStyle: styles.drawerStyle,
                  drawerLabelStyle: {
                    // fontWeight: "bold",
                  },
                  drawerContentStyle: {
                    backgroundColor: "transparent",
                    top: 30,
                  },
                }}
              >
                <Drawer.Screen
                  name="Home"
                  component={BottomTab}
                  options={{
                    headerShown: false,
                    drawerIcon: ({ color, size }) => (
                      <Ionicons name="home-sharp" size={20} />
                    ),
                  }}
                />
                <Drawer.Screen
                  name="Search"
                  component={Search}
                  options={{
                    headerShown: false,
                    drawerIcon: ({ color, size }) => (
                      <Ionicons name="search-sharp" size={20} />
                    ),
                  }}
                />
                <Drawer.Screen
                  name="Profile"
                  component={Profile}
                  options={{
                    drawerIcon: ({ color, size }) => (
                      <Ionicons name="people-sharp" size={20} />
                    ),
                  }}
                />
                {/* <Drawer.Screen
                  name="Cart"
                  component={Cart}
                  options={{
                    drawerIcon: ({ color, size }) => (
                      <Ionicons name="cart-sharp" size={20} />
                    ),
                  }}
                />
                <Drawer.Screen
                  name="Settings"
                  component={Settings}
                  options={{
                    drawerIcon: ({ color, size }) => (
                      <Ionicons name="settings-sharp" size={20} />
                    ),
                  }}
                /> */}
                <Drawer.Screen
                  name="Logout"
                  component={Profile}
                  options={({ navigation }) => ({
                    drawerIcon: ({ color, size }) => (
                      <Ionicons name="log-out" size={20} />
                    ),
                    // Custom content for Profile screen in the drawer
                    drawerLabel: () => (
                      <CustomLogoutButton navigation={navigation} />
                    ),
                  })}
                />
              </Drawer.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

function getWidth() {
  let width = Dimensions.get("window").width;

  // Horizontal Padding = 20...
  width = width - 80;

  // Total five Tabs...
  return width / 5;
}

export default Routes;

const styles = StyleSheet.create({
  drawerStyle: {
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "white",
    width: "65%",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  logoutText: {
    color: "red",
    
  }
});
