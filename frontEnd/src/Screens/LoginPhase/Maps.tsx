import { Text, View, StyleSheet } from "react-native";
import { Image, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Profile from "../Homephase/Profile";
import Search from "../Homephase/Search";


const Drawer = createDrawerNavigator();
export default function Maps() {
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
                screenOptions={{
                    drawerPosition: "right",
                    drawerActiveBackgroundColor: 'transparent',
                    drawerActiveTintColor: 'black',
                    drawerStyle: styles.drawerStyle,
                    overlayColor: 'transparent', 
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
            <View>
                <Text>Maps page</Text>
            </View>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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