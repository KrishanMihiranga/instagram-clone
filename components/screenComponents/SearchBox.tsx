import { View, TextInput } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";

const SearchBox = () => {
    return (
        <View className="relative flex items-center justify-center w-full mt-4" style={{ paddingVertical: 10 }}>
            <Ionic name="search" style={{ fontSize: 18, opacity: 0.7, position: 'absolute', zIndex: 1, left: 25 }} />
            <TextInput placeholder="Search" placeholderTextColor="#909090" style={{ width: "94%", backgroundColor: "#EBEBEB", borderRadius: 10, alignItems: 'center', justifyContent: 'center', fontSize: 15, padding: 10, paddingLeft: 40 }} />
        </View>
    )

}
export default SearchBox;