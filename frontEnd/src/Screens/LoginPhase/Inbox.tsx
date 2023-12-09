import {Text, View } from "react-native";
import Header from "../Homephase/Header";
import { useNavigation } from "@react-navigation/native";

export default function Inbox() {
    const navigation = useNavigation();
    return (
        <><Header title="Search" navigation={navigation} /><View>

            <Text>Inbox</Text>
        </View></>
    )
}