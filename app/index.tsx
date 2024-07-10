import React, { useEffect, useState } from "react";
import * as Font from 'expo-font';
import AppLoading from "@/components/screens/AppLoading";
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "@/components/screens/Home";
import Search from "@/components/screens/Search";
import Reels from "@/components/screens/Reels";
import Activity from "@/components/screens/Activity";
import Profile from "@/components/screens/Profile";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image } from "react-native";
import Status from "@/components/screenComponents/Status";
import FriendProile from "@/components/screenComponents/FriendProile";
import EditProfile from "@/components/screenComponents/EditProfile";

const App: React.FC = () => {
    const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
    const Stack = createNativeStackNavigator();


    const loadFonts = async () => {
        try {
            await Font.loadAsync({
                'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf'),
            });
            setFontsLoaded(true);
        } catch (error) {
            console.error("Error loading fonts:", error);
        }
    };

    useEffect(() => {
        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return <AppLoading message="Loading resources..." />;
    }

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Bottom">
                <Stack.Screen name="Bottom" component={BottomTabScreen} />
                <Stack.Screen name="Status" component={Status} />
                <Stack.Screen name ="FriendProile" component={FriendProile}/>
                <Stack.Screen name ="EditProfile" component={EditProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const BottomTabScreen: React.FC = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: 50
                },
                tabBarIcon: ({ focused, size, color }) => {
                    let iconComponent;
                    if (route.name === "Home") {
                        iconComponent = <Ionicons name={focused ? "home-sharp" : "home-outline"} size={focused ? size + 8 : size + 2} color={color} />;
                    } else if (route.name === "Search") {
                        iconComponent = <Ionicons name={focused ? "search" : "search-outline"} size={focused ? size + 8 : size + 2} color={color} />;
                    } else if (route.name === "Reels") {
                        iconComponent = <Ionicons name={focused ? "add-circle" : "add-circle-outline"} size={focused ? size + 8 : size + 2} color={color} />;
                    } else if (route.name === "Activity") {
                        iconComponent = <Ionicons name={focused ? "heart" : "heart-outline"} size={focused ? size + 8 : size + 2} color={color} />;
                    } else if (route.name === "Profile") {

                        iconComponent = (
                            <Image
                                source={require('../assets/images/profile.png')}
                                style={{ width: focused ? size + 8 : size + 2, height: focused ? size + 8 : size + 2, borderRadius: size / 2 }}
                            />
                        );
                    }
                    return iconComponent;
                }
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Reels" component={Reels} />
            <Tab.Screen name="Activity" component={Activity} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default App;
