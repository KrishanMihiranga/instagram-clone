import { TextInput } from "react-native";
import { View, Text, TouchableOpacity, ToastAndroid, Image } from "react-native"
import Ionic from "react-native-vector-icons/Ionicons";

const EditProfile = ({ route, navigation }) => {
    const { name, accountName, profileImage } = route.params;
    const ToastMessage = () => {
        ToastAndroid.show('Edited Successfully !', ToastAndroid.SHORT);
    }
    return (
        <View className="w-full h-full bg-white">
            <View className="flex-row items-center justify-between" style={{ padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionic name="close-outline" style={{ fontSize: 35 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Edit Profile</Text>
                <TouchableOpacity onPress={() => {
                    ToastMessage();
                    navigation.goBack();
                }}>
                    <Ionic name="checkmark" style={{ fontSize: 35, color: "#3493D9" }} />
                </TouchableOpacity>
            </View>
            <View style={{ padding: 20, alignItems: 'center' }}>
                <Image source={profileImage} style={{ width: 80, height: 80, borderRadius: 100 }} />
                <Text className="text-[#3493D9]">Change profile photo</Text>
            </View>
            <View className="px-5">
                <View>
                    <Text style={{ opacity: 0.5 }}>Name</Text>
                    <TextInput placeholder="name" defaultValue={name} style={{ fontSize: 16, borderBottomWidth: 1, borderColor: '#CDCDCD' }} />
                </View>
                <View style={{ paddingVertical: 20 }}>
                    <Text style={{ opacity: 0.5 }}>Username</Text>
                    <TextInput placeholder="username" defaultValue={accountName} style={{ fontSize: 16, borderBottomWidth: 1, borderColor: '#CDCDCD' }} />
                </View>
                <View style={{ paddingVertical: 20 }}> 
                    <TextInput placeholder="Website" style={{ fontSize: 16, borderBottomWidth: 1, borderColor: '#CDCDCD' }} />
                </View>
                <View style={{ paddingVertical: 20 }}> 
                    <TextInput placeholder="Bio" style={{ fontSize: 16, borderBottomWidth: 1, borderColor: '#CDCDCD' }} />
                </View>
            </View>
            <View className="px-5">
                <Text style={{marginVertical:10, padding:8, color:'#3493D9',borderBottomWidth:1,borderColor:'#EFEFEF'}}>Switch to Profssional account</Text>
                <Text style={{marginVertical:10, padding:8, color:'#3493D9',borderBottomWidth:1,borderColor:'#EFEFEF'}}>Personal information settings</Text>
            </View>
        </View>
    )
}
export default EditProfile;