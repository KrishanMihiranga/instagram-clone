import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, Image } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { TextInput } from 'react-native';
const Post: React.FC = () => {

    const postInfo = [
        {
            postTitle: 'Krishan404',
            postPersonImage: require('../../storage/images/profile.png'),
            postImage: require('../../storage/images/post1.jpg'),
            postDescription:'Concrete dreams touching the sky',
            likes: 803,
            isLiked: false,
        },
        {
            postTitle: 'Zenshi',
            postPersonImage: require('../../storage/images/profile1.jpg'),
            postImage: require('../../storage/images/post2.jpg'),
            postDescription:"Feathers in flight, nature's melody",
            likes: 978,
            isLiked: false,
        },
        {
            postTitle: 'syntaxage',
            postPersonImage: require('../../storage/images/profile5.jpg'),
            postImage: require('../../storage/images/post3.jpg'),
            postDescription:"Growing together, one drop at a time",
            likes: 145,
            isLiked: false,
        },
        {
            postTitle: 'Tom',
            postPersonImage: require('../../storage/images/profile2.jpg'),
            postImage: require('../../storage/images/post5.jpg'),
            postDescription:"Embrace the wild beauty that breathes life into our souls",
            likes: 344,
            isLiked: false,
        },
        {
            postTitle: 'The_Groot',
            postPersonImage: require('../../storage/images/profile3.jpg'),
            postImage: require('../../storage/images/post6.jpg'),
            postDescription:"Nature's symphony soothes the soul and awakens the spirit",
            likes: 475,
            isLiked: false,
        },
        {
            postTitle: 'loverland',
            postPersonImage: require('../../storage/images/profile4.jpg'),
            postImage: require('../../storage/images/post7.jpg'),
            postDescription:"Lighting the path to new ideas and brighter tomorrows",
            likes: 247,
            isLiked: false,
        },
    ];

    return (
        <View>
            {postInfo.map((data, index) => {
                const [like, setLike] = useState(data.isLiked);
                return (
                    <View key={index} style={{ paddingBottom: 10, borderBottomColor: 'gray', borderBottomWidth: 0.1, }}>
                        <View className='flex flex-row items-center justify-between' style={{ padding: 15 }}>
                            <View className='flex flex-row items-center'>
                                <Image source={data.postPersonImage} style={{ width: 40, height: 40, borderRadius: 100 }} />
                                <View className='pl-2'>
                                    <Text className='text-sm font-bold'>{data.postTitle}</Text>
                                </View>
                            </View>
                            <Feather name='more-vertical' style={{ fontSize: 20 }} />
                        </View>
                        <View className='relative flex items-center justify-center'>
                            <Image source={data.postImage} className='w-full h-[400] bg-cover' />
                        </View>
                        <View className='flex flex-row items-center justify-between' style={{ paddingHorizontal: 12, paddingVertical: 15 }}>
                            <View className='flex flex-row items-center'>
                                <TouchableOpacity onPress={() => setLike(!like)}>
                                    <AntDesign
                                        name={like ? 'heart' : 'hearto'}
                                        style={{
                                            paddingRight: 10,
                                            fontSize: 20,
                                            color: like ? 'red' : 'black',
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionic name='chatbubble-outline' style={{ fontSize: 20, paddingRight: 10 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Feather name='navigation' style={{ fontSize: 20 }} />
                                </TouchableOpacity>
                            </View>
                            <Feather name='bookmark' style={{ fontSize: 20 }} />
                        </View>
                        <View style={{ paddingHorizontal: 15 }}>
                            <Text>
                                Liked by {like ? 'you and ' : ''}{' '}
                                {like ? data.likes + 1 : data.likes} others
                            </Text>
                            <Text style={{ fontWeight: '700', fontSize: 14, paddingVertical: 2 }}> {data.postDescription}</Text>
                            <Text style={{ opacity: 0.4, paddingVertical: 2 }}>View all comments</Text>
                            <View className='flex flex-row justify-between'>
                                <View className='flex flex-row items-center'>
                                    <Image source={data.postPersonImage} style={{ width: 25, height: 25, borderRadius: 100, backgroundColor: 'orange', marginRight: 10 }} />
                                    <TextInput placeholder='Add a comment' style={{ opacity: 0.5 }} />
                                </View>
                                <View className='flex flex-row items-center'>
                                    <Entypo name="emoji-happy" style={{ fontSize: 18, color: 'black', opacity: 0.6}} />
                                </View>
                            </View>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

export default Post;
