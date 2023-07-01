import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigation();
    return (
        <SafeAreaView style={tw`flex-1 bg-white p-0`}>
            <Text style={tw`text-center text-xl pt-5`}>Good Morning</Text>
            <View style={tw`flex-shrink border-t border-gray-200 mt-2`}>
                <GooglePlacesAutocomplete
                    placeholder="Where To?"
                    styles={InputBoxStyles}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",
                    }}
                    debounce={400}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    minLength={2}
                    onPress={(data, details = null) => {
                        dispatch(
                            setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            })
                        );
                        navigate.navigate("RideOptionsCard");
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const InputBoxStyles = StyleSheet.create({
    container: {
        flex: 0,
        paddingTop: 20,
        backgroundColor: "white",
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});
