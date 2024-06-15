import React from "react";
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Image,
} from "react-native";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = () => {

    const handleEdit = () => {
        // Navigate to edit page
        router.push('/edit');
    };

    const handleLogout = () => {
        // Handle logout logic here
        console.log('User logged out');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Image style={styles.wave_image} source={require('@/assets/images/wave.png')} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>My Profile</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Details</Text>
                        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                            <FontAwesome name="pencil" size={24} color="white" />
                            <Text style={styles.editText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.detailContent}>
                        <Text style={styles.detailText}>John Doe</Text>
                        <Text style={styles.detailText}>123-456-7890</Text>
                        <Text style={styles.detailText}>john.doe@example.com</Text>
                    </View>
                </View>
                <View style={styles.divider} />
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'white',
    },
    wave_image: {
        width: "110%",
        position: "absolute",
        height: 300,
        top: 0,
    },
    contentContainer: {
        marginTop: 300,
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary,
        marginVertical: 20,
    },
    detailsContainer: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    editButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 5,
    },
    detailContent: {
        paddingVertical: 10,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 10,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#E0E0E0',
        marginBottom: 20,
    },
    logoutButton: {
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 30,
    },
    logoutButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
