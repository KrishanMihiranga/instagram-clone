import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View, Text, StatusBar, Image, Animated } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"


const Status: React.FC = ({ route, navigation }) => {

    const { name } = route.params;
    const { image } = route.params;

    useEffect(() => {
        let timer = setTimeout(() => {
            navigation.goBack();
        }, 5000);

        Animated.timing(progress, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false,
        }).start();
        return () => clearTimeout(timer);
    }, []);

    const [progress, setProgress] = useState(new Animated.Value(0));

    const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ['0%', '100%']
    });

    return (
        <View className='relative flex items-center justify-center h-full bg-black'>
            <StatusBar backgroundColor="black" barStyle={'light-content'} />
            <View style={{ height: 3, width: '95%', borderWidth: 1, backgroundColor: 'gray', position: 'absolute', top: 18, }}>
                <Animated.View className='h-full bg-white' style={{ width: progressAnimation }}></Animated.View>
            </View>
            <View className='p-4 flex flex-row items-center absolute top-3 left-0 w-[90%]'>
                <View style={{ borderRadius: 100, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={image} className='rounded-full bg-orange-500 bg-center w-[92%] h-[92%]'></Image>
                </View>
                <View className='flex flex-row justify-between w-full'>
                    <Text className='pl-2 text-base text-white'>{name}</Text>
                    <TouchableOpacity>
                        <Ionic name='close' style={{ fontSize: 20, color: 'white', opacity: 0.6 }} onPress={() => navigation.goBack()} />
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={image} className='absolute w-full h-[600]' />
            <View className='absolute bottom-0 left-0 flex flex-row items-center justify-around w-full pr-3' style={{ marginVertical: 10 }}>
                <TextInput placeholder='send message' placeholderTextColor='white' className='border-white rounded-3xl w-[80%] h-[50] pl-[20] border-2 text-base text-white' />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="navigation" style={{ fontSize: 30, color: 'white' }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Status;
