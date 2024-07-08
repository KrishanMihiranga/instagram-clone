import { StatusBar } from "react-native";
import { Text, View } from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import { ScrollView } from "react-native";
import Stories from "../screenComponents/Stories";

const Home = () => {
    return (
        <View className="h-full bg-white">
            <StatusBar backgroundColor="white" barStyle={"dark-content"} animated={true} />
            <View className="flex flex-row items-center justify-between px-5 py-4">
                <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
                <Text style={{ fontFamily: "Lobster-Regular", fontSize: 25, fontWeight: '500' }}>Instagram</Text>
                <Feather name="navigation" style={{ fontSize: 24 }} />
            </View>

            <ScrollView>
                <Stories />
            </ScrollView>
        </View>
    )
}
export default Home;