import { ScrollView, StatusBar } from "react-native";
import { Text, View } from "react-native"
import SearchBox from "../screenComponents/SearchBox";
import SearchContent from "../screenComponents/SearchContent";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionic from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, Dimensions, Image } from "react-native";
import { SetStateAction, useState } from "react";

const Search = () => {
    const [image, setImage] = useState();

    const getData = (data: SetStateAction<undefined>) => (
        setImage(data)
    );

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View className="relative w-full h-full bg-white">
            <ScrollView>
                <SearchBox />
                <SearchContent data={getData} />
                <TouchableOpacity style={{ margin: 25, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="pluscircleo" style={{ fontSize: 40, opacity: 0.5 }} />
                </TouchableOpacity>
            </ScrollView>
            {
                image ?
                    (
                        <View className="absolute w-full h-full" style={{ zIndex: 1, backgroundColor: 'rgba(52,52,52,0.8)' }}>
                            <StatusBar backgroundColor="#525252" barStyle="dark-content" />
                            <View className="absolute" style={{ top: windowHeight / 6, left: windowWidth / 18, backgroundColor: 'white', width: 350, height: 465, borderRadius: 15, zIndex: 1, elevation: 50, }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 15, }}>
                                    <Image source={image} style={{ width: 30, height: 30, borderRadius: 100 }} />
                                    <View style={{ paddingLeft: 8 }}>
                                        <Text style={{ fontSize: 12, fontWeight: '600' }}>Krishanm404</Text>
                                    </View>
                                </View>
                                <Image source={image} className="w-full h-[80%]" />
                                <View className="flex flex-row items-center justify-start w-[60%]">
                                    <Ionic name="heart-outline" style={{ fontSize: 26, marginRight: 10, marginTop: 2 }} />
                                    <Ionic name="person-circle-outline" style={{ fontSize: 26, marginRight: 10, marginTop: 2 }} />
                                    <Feather name="navigation" style={{ fontSize: 26, marginRight: 5, marginTop: 2 }} />
                                </View>
                            </View>
                        </View>
                    ) : null
            }
        </View>
    )
}
export default Search;