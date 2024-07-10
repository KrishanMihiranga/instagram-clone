import { View, Text, ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionic from "react-native-vector-icons/Ionicons";

const BottomTabView = () => {
    const Tab = createMaterialTopTabNavigator();
    let squares = [];
    let numberOfSquares = 4;

    for (let index = 0; index < numberOfSquares; index++) {
        squares.push(
            <View key={index}>
                <View style={{ width: 130, height: 150, marginVertical: 0.5, backgroundColor: "black", opacity: 0.1 }}>

                </View>
            </View>
        )

    }

    const Posts = () => {
        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={false} className="w-full h-full">
                    <View className="flex-row flex-wrap justify-between w-full h-full bg-white" style={{ paddingVertical: 5 }}>
                        {squares}
                    </View>
                </ScrollView>
            </View>
        )
    }
    const Videos = () => {
        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={false} className="w-full h-full">
                    <View className="flex-row flex-wrap justify-between w-full h-full bg-white" style={{ paddingVertical: 5 }}>
                        {squares}
                    </View>
                </ScrollView>
            </View>
        )
    }
    const Tags = () => {
        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={false} className="w-full h-full">
                    <View className="flex-row flex-wrap justify-between w-full h-full bg-white" style={{ paddingVertical: 5 }}>
                        {squares}
                    </View>
                </ScrollView>
            </View>
        )
    }


    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    backgroundColor: 'black',
                    height: 1.5
                },
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    if (route.name === "Posts") {
                        iconName = focused ? "apps-sharp" : "apps-sharp";
                        color = focused ? "black" : "gray";
                    } else if (route.name === "Videos") {
                        iconName = focused ? "play-circle" : "play-circle-outline";
                        color = focused ? "black" : "gray";
                    } else if (route.name === "Tags") {
                        iconName = focused ? "person" : "person-outline";
                        color = focused ? "black" : "gray";
                    }
                    return <Ionic name={iconName ? iconName : ''} color={color} size={22} />
                }
            })}>
            <Tab.Screen name="Posts" component={Posts} />
            <Tab.Screen name="Videos" component={Videos} />
            <Tab.Screen name="Tags" component={Tags} />
        </Tab.Navigator>
    )
}
export default BottomTabView;