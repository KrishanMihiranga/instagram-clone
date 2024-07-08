import { TouchableOpacity } from "react-native";
import { Text, View, ScrollView, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native';

const Stories = () => {

    const navigation = useNavigation();

    const storyInfo = [
        {
            id: 1,
            name: 'Your Story',
            image: require('../../storage/images/profile.png'),
        },
        {
            id: 0,
            name: 'Zenshi',
            image: require('../../storage/images/profile1.jpg'),
        },
        {
            id: 0,
            name: 'Tom',
            image: require('../../storage/images/profile2.jpg'),
        },
        {
            id: 0,
            name: 'The_Groot',
            image: require('../../storage/images/profile3.jpg'),
        },
        {
            id: 0,
            name: 'loverland',
            image: require('../../storage/images/profile4.jpg'),
        },
        {
            id: 0,
            name: 'syntaxage',
            image: require('../../storage/images/profile5.jpg'),
        },
    ];
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="px-4">
            {
                storyInfo.map((data, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() =>
                            navigation.push('Status', {
                                name: data.name,
                                image: data.image,
                            })
                        }>
                            <View className="relative flex flex-col" style={{ paddingHorizontal: 8 }}>
                                {
                                    data.id == 1 ?
                                        (
                                            <View className="absolute right-0 z-10 bottom-5">
                                                <Entypo name="circle-with-plus" style={{ fontSize: 23, color: "#405de6", backgroundColor: 'white', borderRadius: 100 }} />
                                            </View>
                                        ) : null}
                                <View className="w-16 h-16 bg-white border-2 rounded-full border-[#c13584] flex justify-center items-center">
                                    <Image source={data.image} className="bg-cover w-[92%] h-[92%] rounded-full bg-orange-500" />
                                </View>
                                <Text className="text-xs text-center" style={{ opacity: data.id == 0 ? 1 : 0.5 }}>
                                    {data.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView >
    )
}

export default Stories;