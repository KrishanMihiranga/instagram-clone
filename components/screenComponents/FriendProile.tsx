import { View, Text, TouchableOpacity, Image } from "react-native";
import { RouteProp, NavigationProp } from '@react-navigation/native';
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ProfileBody, ProfileButtons } from "./ProfileBody";
import { ScrollView } from "react-native";
import { FriendsProfileData } from "@/constants/Db";
import { useState } from "react";

interface FriendProfileParams {
    name: string;
    accountName: string;
    profileImage: string;
    follow: boolean;
    posts: number;
    followers: number;
    following: number;
}

interface FriendProfileProps {
    route: RouteProp<{ params: FriendProfileParams }, 'params'>;
    navigation: NavigationProp<any>;
}
const FriendProfile: React.FC<FriendProfileProps> = ({ route, navigation }) => {
    const { name, accountName, profileImage, follow, posts, followers, following } = route.params;

    return (
        <View className="w-full h-full bg-white" style={{ padding: 10 }}>
            <View className="flex flex-row items-center">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionic name="arrow-back" style={{ fontSize: 20, color: 'black' }} />
                </TouchableOpacity>
                <View className="flex flex-row justify-between items-center w-[92%]">
                    <Text style={{ fontSize: 15, marginLeft: 10, fontWeight: 'bold' }}>{name}</Text>
                    <Feather name="more-vertical" style={{ fontSize: 20, color: 'black' }} />
                </View>
            </View>
            <ProfileBody
                name={name}
                accountName={accountName}
                profileImage={profileImage}
                follow={follow}
                posts={posts}
                followers={followers}
                following={following}
            />
            <ProfileButtons id={1} />
            <Text style={{ paddingVertical: 10, fontSize: 15, fontWeight: 'bold' }}>Suggested for you</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingTop: 10, }}>
                {
                    name === FriendProfile.name ? null : FriendsProfileData.map((data, index) => {
                        const [isFollowing, setIsFollowing] = useState(false);
                        const [close, setClose] = useState(false);
                        return (
                            <View key={index}>
                                {
                                    data.name === name || close ? null : (
                                        <View className=" relative justify-center items-center border-[#DEDEDE] rounded-md" style={{ width: 160, height: 200, margin: 3, borderWidth: 1 }}>
                                            <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10, }} onPress={() => setClose(true)}>
                                                <AntDesign name="close" style={{ fontSize: 20, color: 'black', opacity: 0.5 }} />
                                            </TouchableOpacity>
                                            <Image source={data.profileImage} style={{ width: 80, height: 80, borderRadius: 100, margin: 10 }} />
                                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.name}</Text>
                                            <TouchableOpacity style={{ width: '80%', paddingVertical: 10 }} onPress={() => setIsFollowing(!isFollowing)}>
                                                <View className={`w-full h-8 rounded-md justify-center items-center ${isFollowing ? 'border border-[#DEDEDE]' : 'bg-[#3493D9]'}`} >
                                                    <Text className={`${isFollowing ? 'text-black' : 'text-white'}`}>{isFollowing ? 'Following' : 'Follow'}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

export default FriendProfile;
