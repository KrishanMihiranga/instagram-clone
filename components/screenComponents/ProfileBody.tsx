import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Feather from "react-native-vector-icons/Feather";

interface ProfileBodyProps {
    name: string;
    accountName: string;
    profileImage: string;
    follow: boolean;
    posts: number;
    followers: number;
    following: number;
}

export const ProfileBody: React.FC<ProfileBodyProps> = ({ name, accountName, profileImage, follow, posts, followers, following }) => {
    return (
        <View>
            {
                !accountName ? null : (
                    <View className='flex-row items-center justify-around py-5'>
                        <View className='items-center'>
                            <Image
                                source={ profileImage}
                                style={{
                                    resizeMode: 'cover',
                                    width: 80,
                                    height: 80,
                                    borderRadius: 100
                                }}
                            />
                            <Text style={{ paddingVertical: 5, fontWeight: 'bold' }}>{name}</Text>
                        </View>
                        <View className='items-center'>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{posts}</Text>
                            <Text>Posts</Text>
                        </View>
                        <View className='items-center'>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{followers}</Text>
                            <Text>Followers</Text>
                        </View>
                        <View className='items-center'>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{following}</Text>
                            <Text>Following</Text>
                        </View>
                    </View>
                )
            }
        </View>
    );
}

interface ProfileButtonsProps {
    id: number;
}

export const ProfileButtons: React.FC<ProfileButtonsProps> = ({ id }) => {
    const [follow, setFollow] = useState<boolean>(false);

    return (
        <>
            {
                id === 0 ? null : (
                    <View className='flex-row items-center w-full justify-evenly'>
                        <TouchableOpacity onPress={() => setFollow(!follow)} className='w-[42%]'>
                            <View className={`w-full h-10 rounded-md justify-center items-center ${follow ? 'border border-[#DEDEDE]' : 'bg-[#3493D9]'}`} >
                                <Text className={`${follow ? 'text-black' : 'text-white'}`}>{follow ? "Following" : "Follow"}</Text>
                            </View>
                        </TouchableOpacity>
                        <View className='w-[42%] h-10 border border-[#DEDEDE] justify-center items-center rounded-md'>
                            <Text>Message</Text>
                        </View>
                        <View className='w-[10%] h-10 border border-[#DEDEDE] justify-center items-center rounded-md'>
                            <Feather name="chevron-down" style={{fontSize:20, color: 'black'}}/> 
                        </View>
                    </View>
                )
            }
        </>
    )
}

