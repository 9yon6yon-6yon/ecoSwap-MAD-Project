import React from "react";
import { Animated, Dimensions, Platform, Text, TouchableOpacity, View } from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from "./Screens/LoginPhase/Welcome";
import Index from "./Screens/LoginPhase/Index";
import Signup from "./Screens/LoginPhase/Signup";
import Number from "./Screens/LoginPhase/Number";
import Verify from "./Screens/LoginPhase/Verify";
import Verified from "./Screens/LoginPhase/Verified";
import Login from "./Screens/LoginPhase/Login";
import Home from "./Screens/Homephase/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Create from "./Screens/LoginPhase/Create";
import Inbox from "./Screens/LoginPhase/Inbox";
import Maps from "./Screens/LoginPhase/Maps";
import Notificationpage from "./Screens/LoginPhase/Notificationpage";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    const tabOffsetValue = React.useRef(new Animated.Value(0)).current;

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#000000',
                height: 64
            },

        }}>
            <Tab.Screen name={"Home"} component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 20,
                    }}>
                        <FontAwesome5
                            name="home"
                            size={23}
                            color={focused ? '#42B92D' : '#ffffff'}
                        ></FontAwesome5>

                    </View>
                )
            }} listeners={({ navigation, route }) => ({
                // Onpress Update....
                tabPress: e => {
                    Animated.spring(tabOffsetValue, {
                        toValue: 0,
                        useNativeDriver: true
                    }).start();
                }
            })}></Tab.Screen>

            <Tab.Screen name={"Map"} component={Maps} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 20
                    }}>
                        <FontAwesome5
                            name="map-marker-alt"
                            size={23}
                            color={focused ? '#42B92D' : '#ffffff'}
                        ></FontAwesome5>

                    </View>
                )
            }} listeners={({ navigation, route }) => ({
                // Onpress Update....
                tabPress: e => {
                    Animated.spring(tabOffsetValue, {
                        toValue: getWidth(),
                        useNativeDriver: true
                    }).start();
                }
            })}></Tab.Screen>

            <Tab.Screen name={"Create"} component={Create} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (

                    <View style={{
                        width: 70,
                        height: 73,
                        backgroundColor: '#42B92D',
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <FontAwesome5
                            name="plus"
                            size={23}
                            color={focused ? 'black' : '#ffffff'}
                        ></FontAwesome5>

                    </View>
                )
            }}
                listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth(),
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen >

            <Tab.Screen name={"Notifications"} component={Notificationpage} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 20
                    }}>
                        <FontAwesome5
                            name="bell"
                            size={23}
                            color={focused ? '#42B92D' : '#ffffff'}
                        ></FontAwesome5>

                    </View>
                )
            }} listeners={({ navigation, route }) => ({
                // Onpress Update....
                tabPress: e => {
                    Animated.spring(tabOffsetValue, {
                        toValue: getWidth() * 3,
                        useNativeDriver: true
                    }).start();
                }
            })}></Tab.Screen>

            <Tab.Screen name={"Inbox"} component={Inbox} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 20
                    }}>
                        <FontAwesome5
                            name="inbox"
                            size={23}
                            color={focused ? '#42B92D' : '#ffffff'}
                        ></FontAwesome5>

                    </View>
                )
            }} listeners={({ navigation, route }) => ({
                // Onpress Update....
                tabPress: e => {
                    Animated.spring(tabOffsetValue, {
                        toValue: getWidth() * 4,
                        useNativeDriver: true
                    }).start();
                }
            })}></Tab.Screen>


        </Tab.Navigator >


    );

};

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#ffffff' }
                }}
            >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Index" component={Index} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Number" component={Number} />
                <Stack.Screen name="Verify" component={Verify} />
                <Stack.Screen name="Verified" component={Verified} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={BottomTab} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};




function getWidth() {
    let width = Dimensions.get("window").width
    width = width - 80
    return width / 5;
}