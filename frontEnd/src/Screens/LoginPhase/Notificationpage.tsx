import { Text, View } from "react-native";
import Header from "../Homephase/Header";

export default function Notificationpage({ navigation }) {
  return (
    <View>
      <Header title="Search" navigation={navigation} />

      <Text>Notification Page</Text>
    </View>
  );
}
