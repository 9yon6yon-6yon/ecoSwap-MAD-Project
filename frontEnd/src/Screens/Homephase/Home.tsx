import React from "react";
import { Image, StyleSheet, SafeAreaView, TouchableOpacity, View } from "react-native";
import "react-native-gesture-handler";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import Maps from "../LoginPhase/Maps";
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Profile from "./Profile";
import Search from "./Search";



const Drawer = createDrawerNavigator();
const Stack = createDrawerNavigator();
const Home = () => {

    const header = (title, navigation) => ({
        title,
        headerStyle: {
            shadowOpacity: 0,
            elevation: 0,
            backgroundColor: 'transparent'
        },

        headerTitle: () => null,
        headerTitleContainerStyle: { borderBottomWidth: 0 },
        headerRightContainerStyle: { paddingRight: 20 },
        header: () => (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require("../../../assets/splash.png")}
                        style={styles.logo}

                    />
                </TouchableOpacity>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <Ionicons name="search-sharp" size={28} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconContainer1}>
                    <TouchableOpacity onPress={() => navigation.openDrawer('Profile')}>
                        <FontAwesome5 name="user-circle" size={27} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        ),
    });
    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <Drawer.Navigator
                drawerContentOptions={{ overlayColor: 'transparent' }}
                screenOptions={{
                    drawerPosition: "right",
                    drawerActiveBackgroundColor: 'transparent',
                    drawerActiveTintColor: 'black',
                    drawerStyle: styles.drawerStyle,

                }}
            >

                <Drawer.Screen
                    name="Search"
                    component={Search}
                    options={({ navigation }) => header('Search', navigation)}
                />
                <Drawer.Screen
                    name="Profile"
                    component={Profile}
                    options={({ navigation }) => header('Profile', navigation)}
                />
                {/* <Stack.Screen
                    name="Search"
                    component={Search}
                    options={({ navigation }) => header('Search', navigation)}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={({ navigation }) => header('Profile', navigation)}
                /> */}

            </Drawer.Navigator>
        </SafeAreaView >
    );
};


export default Home;


const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        paddingVertical: 28,

    },
    iconContainer: {
        left: 105
    },
    iconContainer1: {
        right: 25,
        bottom: 2
    },
    logo: {
        width: 73,
        height: 26.8,
        justifyContent: 'center',
        alignItems: 'center',
        top: 3,
        left: 30
    },
    drawerStyle: {
        borderBottomLeftRadius: 30,
        backgroundColor: 'white',
    }
});
