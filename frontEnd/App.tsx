import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignUp from "./src/pages/SignUp";
import LoginPage from "./src/pages/LoginPage";

import SettingsPage from "./src/pages/SettingsPage";
import NationalizePage from "./src/pages/NationalizePage";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
import Routes from "./src/Routes";


const stack = createStackNavigator();
const bottom_tab = createBottomTabNavigator();
const BasicDashboardScreen = () => {
  return (
    <stack.Navigator initialRouteName="Counter" screenOptions={{ headerShown: false }}>
      <stack.Screen name="Login" component={LoginPage} />
    </stack.Navigator>
  )
}
// const App = () => {
//   return (
//     <AuthProvider>
//       <AuthContext.Consumer>
//         {(auth) =>
//           auth?.isLoggedIn ? (
//             <NavigationContainer>
//               <bottom_tab.Navigator>
//                 < bottom_tab.Screen name="Settings" component={SettingsPage} />
//                 < bottom_tab.Screen name="Nationalize" component={NationalizePage} />

//               </bottom_tab.Navigator>
//             </NavigationContainer>
//           ) : (
//             <NavigationContainer>
//               <stack.Navigator>
//                 < bottom_tab.Screen name="Dashboard" component={BasicDashboardScreen} />
//               </stack.Navigator>
//             </NavigationContainer>
//           )
//         }
//       </AuthContext.Consumer>
//     </AuthProvider>


//     // <CounterPage/>
//   )
// }


const App = () => {
    return (
        <Routes/>
    )
}

export default App;