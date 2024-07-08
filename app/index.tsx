import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Font from 'expo-font';
import AppLoading from "@/components/AppLoading"; // Adjust path if needed

const Home: React.FC = () => {
    const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

    useEffect(() => {
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
        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return <AppLoading message="Loading resources..." />;
    }

    return (
        <View className="flex-1 justify-center items-center bg-white flex-col flex">
            <Text style={styles.text} className="text-red-500">Hello World</Text>
            <Ionicons name="play" size={20} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Lobster-Regular',
        fontSize: 20,
        marginBottom: 10,
    },
});

export default Home;
