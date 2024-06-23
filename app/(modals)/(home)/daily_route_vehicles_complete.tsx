import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    SafeAreaView,
    ScrollView,
    TextInput,
} from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { dailyRoutes } from "@/constants/dummy";
import { router } from "expo-router";
import FloatingButton from "@/components/FloatingButton";


const DailyRouteVehiclesComplete: React.FC = () => {


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <FontAwesome5 name="search" size={18} color={Colors.secondary} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor={Colors.secondary}
                />
            </View>

            <ScrollView style={styles.routesList}>
                {dailyRoutes.map((route, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.cardHeader}>
                            <TouchableOpacity style={styles.photosButton} onPress={() => router.push('all_photos')}>
                                <Text style={styles.photosButtonText}>Photos</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }} >
                            <Text style={{ fontWeight: "600", fontSize: 14 }} >Departure</Text>
                            <Text style={{ fontWeight: "600", fontSize: 14 }} >Destination</Text>
                        </View>
                        <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }} >
                            <Text style={{ fontWeight: "600", fontSize: 15 }} >{route.departure}</Text>
                            <MaterialIcons name="keyboard-double-arrow-right" size={24} color={Colors.darkBlue} />
                            <Text style={{ fontWeight: "600", fontSize: 15 }} >{route.destination}</Text>
                        </View>

                        <Text style={styles.cardText}>Vehicle Number: {route.vehicleNumber}</Text>
                        <Text style={styles.cardText}>Departure Time: {route.departureTime}</Text>
                        <Text style={styles.cardText}>Cleaner Name: {route.cleanerName}</Text>
                        <Text style={styles.cardText}>Driver Name 1: {route.driverName1}</Text>
                        <Text style={styles.cardText}>Driver Name 2: {route.driverName2}</Text>
                    </View>
                ))}
            </ScrollView>
            <FloatingButton />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ffffff",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: Colors.secondary,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 20,
        paddingVertical: 5,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        color: Colors.secondary,
    },
    routesList: {
        flex: 1,
    },
    card: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 5,
        marginBottom: 20,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        position: "relative",
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 10,
    },
    photosButton: {
        backgroundColor: Colors.darkBlue,
        paddingHorizontal: 10,
        borderRadius: 5,
        paddingVertical: 5,
    },
    photosButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 12,
    },
    cardText: {
        marginBottom: 8,
        color: Colors.secondary,
        fontWeight: "500",
        fontSize: 13,
    },
});

export default DailyRouteVehiclesComplete;
