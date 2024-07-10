import { Text, View, ScrollView } from "react-native"
import { ProfileBody, ProfileButtons } from "../screenComponents/ProfileBody";
import Entypo from "react-native-vector-icons/Entypo";
import BottomTabView from "../screenComponents/BottomTabView";

const Profile = () => {

    let circles = [];
    let numberOfCircles = 10;

    for (let index = 0; index < numberOfCircles; index++) {
        circles.push(
            <View key={index}>
                {
                    index === 0 ? (
                        <View style={{ width: 60, height: 60, borderRadius: 100, borderWidth: 1, opacity: 0.7, marginHorizontal: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Entypo name="plus" style={{ fontSize: 40, color: 'black' }} />
                        </View>
                    ) : (
                        <View style={{ width: 60, height: 60, borderRadius: 100, backgroundColor: 'black', opacity: 0.1, marginHorizontal: 5, }}> 
                        </View>
                    )
                }
            </View>
        )

    }


    return (
        <View className="w-full h-full bg-white">
            <View className="w-full" style={{ padding: 10, }}>
                <ProfileBody
                    name={"Krishan Mihiranga"}
                    accountName={"krishanm404"}
                    profileImage={require("../../storage/images/profile.png")}
                    follow={false}
                    posts={10}
                    followers={3000}
                    following={234} />
                <ProfileButtons id={0} name={"Krishan Mihiranga"} accountName={"krishanm404"} profileImage={require("../../storage/images/profile.png")} />
            </View>
            <View>
                <Text style={{ padding: 10, letterSpacing: 1, fontSize: 14, }}>Story Highlights</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingVertical: 5, paddingHorizontal: 10, }}>
                    {circles}
                </ScrollView>
            </View>
            <BottomTabView />
        </View>
    )
}
export default Profile;