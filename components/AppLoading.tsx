// AppLoadingScreen.tsx
import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

interface AppLoadingScreenProps {
    message?: string;
}

const AppLoadingScreen: React.FC<AppLoadingScreenProps> = ({ message = "Loading..." }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    message: {
        marginTop: 20,
        fontSize: 16,
        color: '#333',
    },
});

export default AppLoadingScreen;
