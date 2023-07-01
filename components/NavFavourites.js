import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import tw from "twrnc";

const data = [
    {
        id: 123,
        icon: "home",
        location: "Home",
        destination: "Kolej Kediaman Kinabalu",
    },
    {
        id: 456,
        icon: "briefcase",
        location: "Work",
        destination: "MoneyLion",
    },
];

const NavFavourites = () => {
    return (
        <FlatList
            data={data}
            ItemSeparatorComponent={() => (
                <View style={{ backgroundColor: "gray", height: .5 }} />
            )}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <Icon
                        style={tw`p-3 bg-gray-300 rounded-full mr-4`}
                        type="ionicon"
                        name={item.icon}
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-bold text-lg`}>
                            {item.location}
                        </Text>
                        <Text style={tw`text-gray-500`}>
                            {item.destination}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavFavourites;

const styles = StyleSheet.create({});
