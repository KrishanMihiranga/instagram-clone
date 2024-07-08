import { TouchableOpacity } from "react-native";
import { View, Image } from "react-native";
import React from "react";

const SearchContent = (props: any) => {

    const searchData = [
        {
            id: 0,
            images: [
                require("../../storage/images/post1.jpg"),
                require("../../storage/images/post2.jpg"),
                require("../../storage/images/post3.jpg"),
                require("../../storage/images/post1.jpg"),
                require("../../storage/images/post5.jpg"),
                require("../../storage/images/post6.jpg"),
            ]
        },
        {
            id: 1,
            images: [
                require("../../storage/images/post7.jpg"),
                require("../../storage/images/post8.jpg"),
                require("../../storage/images/post9.jpg"),
                require("../../storage/images/post10.jpg"),
                require("../../storage/images/post11.jpg"),
                require("../../storage/images/post12.jpg"),
            ]
        },
        {
            id: 2,
            images: [
                require("../../storage/images/post13.jpg"),
                require("../../storage/images/post14.jpg"),
                require("../../storage/images/post15.jpg"),
            ]
        },
    ]

    return (
        <View>
            {searchData.map((data) => (
                <React.Fragment key={data.id}>
                    {data.id === 0 ? (
                        <View className="flex flex-row flex-wrap justify-between">
                            {data.images.map((imageData, imgIndex) => (
                                <TouchableOpacity
                                    key={imgIndex}
                                    onPress={() => props.data(imageData)}
                                    style={{ paddingBottom: 2 }}>
                                    <Image source={imageData} style={{ width: 129, height: 150 }} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    ) : null}
                    {data.id === 1 ? (
                        <View className="flex flex-row justify-between">
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: 261 }}>
                                {data.images.slice(0, 4).map((imageData, imgIndex) => (
                                    <TouchableOpacity
                                        key={imgIndex}
                                        onPress={() => props.data(imageData)}
                                        style={{ paddingBottom: 2 }}>
                                        <Image source={imageData} style={{ width: 129, height: 300 }} />
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <TouchableOpacity
                                key={data.images[5]}
                                onPress={() => props.data(data.images[5])}
                                style={{ marginLeft: 2 }}>
                                <Image source={data.images[5]} style={{ width: 129, height: 300 }} />
                            </TouchableOpacity>
                        </View>
                    ) : null}
                    {data.id === 2 ? (
                        <View className="flex flex-row justify-between">
                            <TouchableOpacity
                                key={data.images[2]}
                                onPress={() => props.data(data.images[2])}
                                style={{ paddingBottom: 2 }}>
                                <Image source={data.images[2]} style={{ width: 260, height: 300 }} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: 130, justifyContent: 'space-between' }}>
                                {data.images.slice(0, 2).map((imageData, imgIndex) => (
                                    <TouchableOpacity
                                        key={imgIndex}
                                        onPress={() => props.data(imageData)}
                                        style={{ paddingBottom: 2 }}>
                                        <Image source={imageData} style={{ width: 129, height: 150 }} />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    ) : null}
                </React.Fragment>
            ))}
        </View>
    )
}

export default SearchContent;
