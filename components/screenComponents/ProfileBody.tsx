import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Feather from "react-native-vector-icons/Feather";

interface ProfileBodyProps {
    name: string;
    accountName: any;
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
                accountName ? (
                    <View className='flex-row items-center justify-between'>
                        <View className='flex-row items-center'>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{accountName}</Text>
                            <Feather name="chevron-down" style={{ fontSize: 20, color: 'black', paddingHorizontal: 5, opacity: 0.5 }} />
                        </View>
                        <View className='flex-row items-center'>
                            <Feather name="plus-square" style={{ fontSize: 25, color: 'black', paddingHorizontal: 15, }} />
                            <Feather name="menu" style={{ fontSize: 25 }} />
                        </View>
                    </View>
                ) : null
            }
            <View className='flex-row items-center justify-around pt-5'>
                <View className='items-center'>
                    <Image
                        source={profileImage}
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
            {
                accountName ? (
                    <View className='px-3 mb-3'>
                        <View className='h-9 border border-[#3493D9] rounded-2xl w-32 items-center justify-center mb-1'>
                            <Text className='text-[#3493D9]'>
                                <Feather name="at-sign"/> {accountName}
                            </Text>
                        </View>
                        <Text>Front-End Maven | Shaping code since '19 | DM for a byte of conversation ❤</Text>
                    </View>
                ) : null
            }
        </View>
    );
}

interface ProfileButtonsProps {
    id: number;
    name: string;
    accountName: string;
    profileImage: any;
}

export const ProfileButtons: React.FC<ProfileButtonsProps> = ({ id, name, accountName, profileImage }) => {
    const navigation = useNavigation();
    const [follow, setFollow] = useState<boolean>(false);

    return (
        <>
            {
                id === 0 ? (
                    <View className='flex-row items-center w-full justify-evenly' style={{ paddingVertical: 5 }}>
                        <TouchableOpacity className='w-full' onPress={() => navigation.push("EditProfile", { name: name, accountName: accountName, profileImage: profileImage })}>
                            <View className='w-full h-10 rounded-md border-[#DEDEDE] border justify-center items-center'>
                                <Text className='font-bold' style={{ fontSize: 14, letterSpacing: 1, opacity: 0.6, }}>Edit Profile</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (
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
                            <Feather name="chevron-down" style={{ fontSize: 20, color: 'black' }} />
                        </View>
                    </View>
                )
            }
        </>
    )
}

