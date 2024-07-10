import { FriendsProfileData } from "@/constants/Db";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Text, View, Image } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"

const Activity = () => {
    const navigation = useNavigation();
    return (
        <View className="w-full h-full bg-white">
            <Text style={{ fontSize: 20, fontWeight: 'bold', borderBottomWidth: 0.5, borderBottomColor: '#DEDEDE', padding: 10, }}>Activity</Text>
            <ScrollView style={{ margin: 10 }} showsVerticalScrollIndicator={false}>
                <Text className="font-bold">This Week</Text>
                <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                    {FriendsProfileData.slice(0, 3).map((data, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => navigation.push("FriendProile", {
                                name: data.name,
                                accountName: data.accountName,
                                profileImage: data.profileImage,
                                follow: data.follow,
                                posts: data.posts,
                                followers: data.followers,
                                following: data.following,
                            })}>
                                <Text>{data.name},</Text>
                            </TouchableOpacity>
                        );
                    })}
                    <Text>Started following you</Text>
                </View>
                <Text className="font-bold">Earlier</Text>
                {
                    FriendsProfileData.slice(3, 6).map((data, index) => {
                        const [follow, setFollow] = useState(data.follow);
                        return (
                            <View key={index} className="w-full">
                                <View className="flex flex-row items-center justify-between w-full" style={{ paddingVertical: 15 }}>
                                    <TouchableOpacity className="flex flex-row items-center justify-between" style={{ maxWidth: '64%' }} onPress={() => navigation.push("FriendProile", {
                                        name: data.name,
                                        accountName: data.accountName,
                                        profileImage: data.profileImage,
                                        follow: follow,
                                        posts: data.posts,
                                        followers: data.followers,
                                        following: data.following,
                                    })}>
                                        <Image source={data.profileImage} style={{ width: 45, height: 45, borderRadius: 100, marginRight: 10 }} />
                                        <Text style={{ fontSize: 15 }}>
                                            <Text className="font-bold">{data.name}</Text>, who you might know, is on instagram
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setFollow(!follow)} style={{ width: follow ? 72 : 68 }}>
                                        <View className={`flex items-center justify-center w-full h-8 rounded-md ${follow ? 'border border-black' : 'bg-[#3493D9]'}`}>
                                            <Text className={`${follow ? 'text-black' : 'text-white'}`}>{follow ? 'Following' : 'Follow'}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }

                <Text style={{ fontWeight: 'bold', paddingVertical: 10 }}>Suggestions for you</Text>
                {FriendsProfileData.slice(6, 12).map((data, index) => {
                    const [follow, setFollow] = useState(data.follow);
                    const [close, setClose] = useState(false);
                    return (
                        <View key={index}>
                            {
                                close ? null : (
                                    <View style={{ paddingVertical: 10 }} className="flex flex-row justify-between w-full">
                                        <View>
                                            <TouchableOpacity className="flex flex-row items-center" style={{ maxWidth: '64%' }} onPress={() => navigation.push("FriendProile", {
                                                name: data.name,
                                                accountName: data.accountName,
                                                profileImage: data.profileImage,
                                                follow: follow,
                                                posts: data.posts,
                                                followers: data.followers,
                                                following: data.following,
                                            })}>
                                                <Image source={data.profileImage} style={{ width: 45, height: 45, borderRadius: 100, marginRight: 10 }} />
                                                <View className="w-full">
                                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{data.name}</Text>
                                                    <Text style={{ fontSize: 12, opacity: 0.5 }}>{data.accountName}</Text>
                                                    <Text style={{ fontSize: 12, opacity: 0.5 }}>Suggested for you</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View className="flex flex-row items-center">
                                            {
                                                follow ? (
                                                    <TouchableOpacity style={{ width: follow ? 90 : 68 }} onPress={() => setFollow(!follow)}>
                                                        <View className={`w-full h-8 rounded-md ${follow ? null : 'bg-[#3493D9]'} border-[#DEDEDE] justify-center items-center`}>
                                                            <Text className={`${follow ? 'text-black' : 'text-white'}`}>
                                                                {follow ? "Following" : "Follow"}
                                                            </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                ) : (
                                                    <>
                                                        <TouchableOpacity style={{ width: follow ? 90 : 68 }} onPress={() => setFollow(!follow)}>
                                                            <View className={`w-full h-8 rounded-md ${follow ? null : 'bg-[#3493D9]'} border-[#DEDEDE] justify-center items-center`}>
                                                                <Text style={{ color: follow ? 'black' : 'white' }}>
                                                                    {follow ? "Following" : "Follow"}
                                                                </Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => setClose(true)}>
                                                            <AntDesign name="close" style={{ fontSize: 14, color: 'black', opacity: 0.8 }} />
                                                        </TouchableOpacity>
                                                    </>
                                                )
                                            }
                                        </View>
                                    </View>
                                )
                            }
                        </View>
                    )
                })}
                <View style={{ padding: 20 }}>
                    <Text className="text-[#3493D9]">See all Suggestions</Text>
                </View>
            </ScrollView>
        </View>
    )
}
export default Activity;