import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const NavigateCard = () => {
    return (
        <SafeAreaView style={tw`flex-1 bg-white p-0`}>
            <Text style={tw`text-center text-xl pt-5`}>Good Morning</Text>
            <View style={tw`flex-shrink`}>
                <GooglePlacesAutocomplete
                    placeholder="Where To?"
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",
                    }}
                    debounce={400}
                    nearbyPlacesAPI="GooglePlacesSearch"
                />
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const styles = StyleSheet.create({});
