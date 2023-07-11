import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    FlatList,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
    const navigate = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <Text style={tw`text-center py-5 text-xl`}>
                    Select a Ride - {travelTimeInformation?.distance.text}
                </Text>
                <TouchableOpacity
                    onPress={() => navigate.goBack()}
                    style={[
                        tw`top-3 left-5 p-3 rounded-full`,
                        { position: "absolute" },
                    ]}
                >
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={tw`flex-row items-center justify-between px-10 ${
                            item.id === selected?.id && "bg-gray-200"
                        }`}
                        onPress={() => setSelected(item)}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain",
                            }}
                            source={{ uri: item.image }}
                        />
                        <View style={tw`mr-4`}>
                            <Text style={tw`text-xl font-semibold`}>
                                {item.title}
                            </Text>
                            <Text>
                                {travelTimeInformation?.duration?.text} Travel
                                Time
                            </Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat("en-ml", {
                                style: "currency",
                                currency: "MYR",
                            }).format(
                                (travelTimeInformation?.duration.value *
                                    SURGE_CHARGE_RATE *
                                    item.multiplier) /
                                    100
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            <View>
                <TouchableOpacity
                    disabled={!selected}
                    style={tw`bg-black py-2 m-3 ${!selected && "bg-gray-300"}`}
                >
                    <Text style={tw`text-center text-xl text-white`}>
                        Choose {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
