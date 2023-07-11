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
import { useDispatch, useSelector } from "react-redux";
import {
    selectDestination,
    selectOrigin,
    setDestination,
    setOrigin,
} from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const data = [
    {
        id: 123,
        icon: "home",
        location: "Home",
        destination: "Kolej Kediaman Kinabalu",
        placeData: {
            description:
                "Kolej Kediaman Kinabalu, Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
            location: { lat: 3.1298395, lng: 101.6493111 },
        },
    },
    {
        id: 456,
        icon: "briefcase",
        location: "Work",
        destination: "MoneyLion",
        placeData: {
            description:
                "MoneyLion Malaysia Sdn Bhd, Lingkaran TRX, Level 26, Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
            location: { lat: 3.1416817, lng: 101.7186365 },
        },
    },
];

const NavFavourites = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const navigation = useNavigation();
    const { routes, index } = navigation.getState();
    const currentRoute = routes[index].name;
    const dispatch = useDispatch();

    const handleShorcut = (item) => {
        if (currentRoute === "HomeScreen") {
            dispatch(setOrigin(item.placeData));
            navigation.navigate("MapScreen");
        } else {
            dispatch(setDestination(item.placeData));
            navigation.navigate("RideOptionsCard");
        }
    };
    return (
        <FlatList
            data={data}
            ItemSeparatorComponent={() => (
                <View style={{ backgroundColor: "gray", height: 0.5 }} />
            )}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={tw`flex-row items-center p-5`}
                    onPress={() => handleShorcut(item)}
                >
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
