import { Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const data = [
    {
        id: 123,
        title: "Get a Ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: 456,
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={tw`p-6 bg-gray-100 m-2 rounded-xl`}
                    onPress={() => navigation.navigate(item.screen)}
                >
                    <View>
                        <Image
                            source={{ uri: item.image }}
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain",
                            }}
                        />
                        <Text style={tw`mt-2 font-semibold text-lg`}>
                            {item.title}
                        </Text>
                        <Icon
                            type="antdesign"
                            name="arrowright"
                            color="white"
                            style={tw`w-10 rounded-full bg-black p-2 mt-4`}
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions;
