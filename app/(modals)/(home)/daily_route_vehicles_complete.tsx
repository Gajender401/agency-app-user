import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    SafeAreaView,
    ScrollView,
    TextInput,
    Alert,
    ActivityIndicator,
} from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import FloatingButton from "@/components/FloatingButton";
import { useGlobalContext } from "@/context/GlobalProvider";


const DailyRouteVehiclesComplete: React.FC = () => {
    const [routes, setRoutes] = useState<DailyRoute[]>([]);
    const [loading, setLoading] = useState(false);

    const { apiCaller, driverId } = useGlobalContext();

    useEffect(() => {
        fetchRoutes();
    }, []);

    const fetchRoutes = async () => {
        try {
            setLoading(true);
            const response = await apiCaller.get(`/api/dailyRoute/driver/${driverId}`);
            const filteredRoutes = response.data.data.filter((route: DailyRoute) => route.status === "COMPLETED");
            setRoutes(filteredRoutes);
        } catch (error) {
            console.error("Error fetching routes:", error);
            Alert.alert("Error", "Failed to fetch routes. Please try again.");
        } finally {
            setLoading(false);
        }
    };

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

            {loading ? (
                <ActivityIndicator size="large" color={Colors.darkBlue} />
            ) : (                
            <ScrollView style={styles.routesList}>
                {routes.map((route, index) => (
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
                                <Text style={{ fontWeight: "600", fontSize: 15 }} >{route.departurePlace}</Text>
                                <MaterialIcons name="keyboard-double-arrow-right" size={24} color={Colors.darkBlue} />
                                <Text style={{ fontWeight: "600", fontSize: 15 }} >{route.destinationPlace}</Text>
                            </View>

                            <Text style={styles.cardText}>
                                Vehicle Number: <Text style={{ color: "black" }}>{route.vehicleNumber}</Text>
                            </Text>
                            <Text style={styles.cardText}>
                                Departure Time: <Text style={{ color: "black" }}>{route.departureTime}</Text>
                            </Text>
                            <Text style={styles.cardText}>
                                Cleaner Name: <Text style={{ color: "black" }}>{route.cleaner ? route.cleaner.name : "N/A"}</Text>
                            </Text>
                            <Text style={styles.cardText}>
                                Primary Driver : <Text style={{ color: "black" }}>{route.primaryDriver ? route.primaryDriver.name : "N/A"}</Text>
                            </Text>
                            <Text style={styles.cardText}>
                                Secondary Driver: <Text style={{ color: "black" }}>{route.secondaryDriver ? route.secondaryDriver.name : "N/A"}</Text>
                            </Text>

                    </View>
                ))}
            </ScrollView>
            )}
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
