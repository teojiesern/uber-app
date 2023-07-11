import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigate = useNavigation();
    return (
        <View>
            <View style={tw`h-1/2`}>
                <Map />
            </View>

            <View style={tw`h-1/2 bg-white`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </View>
            <TouchableOpacity
                onPress={() => navigate.goBack()}
                style={tw`absolute top-16 left-5 p-3 rounded-full shadow-lg`}
            >
                <Icon name="chevron-left" type="fontawesome" />
            </TouchableOpacity>
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({});
