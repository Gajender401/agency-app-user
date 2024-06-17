import React, { useState } from "react";
import {
    View,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    TextInput,
    SafeAreaView,
    ScrollView,
    Platform,
    Alert,
    ActivityIndicator
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Colors } from "@/constants/Colors";

const AddCarScreen: React.FC = () => {
    const [vehicleNo, setVehicleNo] = useState("");
    const [seatingCapacity, setSeatingCapacity] = useState("");
    const [vehicleModel, setVehicleModel] = useState("");
    const [location, setLocation] = useState("");
    const [carName, setCarName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [features, setFeatures] = useState({
        AC: false,
        NonAC: false,
        ForRent: false,
        ForSell: false,
    });
    const [carImages, setCarImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const handleAddCar = () => {
        if (!vehicleNo || !seatingCapacity || !vehicleModel || !location || !carName || !contactNo || carImages.length === 0) {
            Alert.alert("Please fill all fields and upload car images.");
            return;
        }

        const newCar = {
            vehicleNo,
            seatingCapacity,
            vehicleModel,
            location,
            carName,
            contactNo,
            features,
            carImages,
        };

        console.log("New Car Data:", newCar);

        // Simulate loading state (you can replace this with actual API call)
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            resetForm();
            Alert.alert("Success", "Car added successfully!");
        }, 1500);
    };

    const handleImagePicker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1,
        });

        if (!result.canceled) {
            setCarImages(result.assets.map(asset => asset.uri));
        }
    };

    const toggleFeature = (feature: keyof typeof features) => {
        setFeatures(prevFeatures => ({
            ...prevFeatures,
            [feature]: !prevFeatures[feature],
        }));
    };

    const resetForm = () => {
        setVehicleNo("");
        setSeatingCapacity("");
        setVehicleModel("");
        setLocation("");
        setCarName("");
        setContactNo("");
        setFeatures({
            AC: false,
            NonAC: false,
            ForRent: false,
            ForSell: false,
        });
        setCarImages([]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Vehicle No</Text>
                        <TextInput
                            style={styles.input}
                            value={vehicleNo}
                            onChangeText={(text) => setVehicleNo(text)}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Seating Capacity</Text>
                        <TextInput
                            style={styles.input}
                            value={seatingCapacity}
                            onChangeText={(text) => setSeatingCapacity(text)}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Vehicle Model</Text>
                        <TextInput
                            style={styles.input}
                            value={vehicleModel}
                            onChangeText={(text) => setVehicleModel(text)}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Location</Text>
                        <TextInput
                            style={styles.input}
                            value={location}
                            onChangeText={(text) => setLocation(text)}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Car Name</Text>
                        <TextInput
                            style={styles.input}
                            value={carName}
                            onChangeText={(text) => setCarName(text)}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Contact No</Text>
                        <TextInput
                            style={styles.input}
                            value={contactNo}
                            onChangeText={(text) => setContactNo(text)}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.featuresContainer}>
                        <TouchableOpacity
                            style={[styles.featureButton, features.AC && styles.featureButtonSelected]}
                            onPress={() => toggleFeature("AC")}
                        >
                            <Text style={styles.featureText}>AC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.featureButton, features.NonAC && styles.featureButtonSelected]}
                            onPress={() => toggleFeature("NonAC")}
                        >
                            <Text style={styles.featureText}>Non-AC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.featureButton, features.ForRent && styles.featureButtonSelected]}
                            onPress={() => toggleFeature("ForRent")}
                        >
                            <Text style={styles.featureText}>For Rent</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.featureButton, features.ForSell && styles.featureButtonSelected]}
                            onPress={() => toggleFeature("ForSell")}
                        >
                            <Text style={styles.featureText}>For Sell</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.imagePicker} onPress={handleImagePicker}>
                        <Text style={styles.imagePickerText}>Upload Car Images (Max 5)</Text>
                    </TouchableOpacity>
                    <View style={styles.imagePreviewContainer}>
                        {carImages.map((uri, index) => (
                            <Image key={index} source={{ uri }} style={styles.previewImage} />
                        ))}
                    </View>

                    <View style={styles.modalButtons}>
                        <TouchableOpacity
                            style={[styles.modalButton, { backgroundColor: Colors.darkBlue }]}
                            onPress={handleAddCar}
                        >
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={[styles.modalButtonText, { color: "#fff" }]}>Add Car</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ffffff",
    },
    modalContainer: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        paddingHorizontal: 20,
    },
    modalContent: {
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    inputGroup: {
        marginBottom: 15,
    },
    label: {
        marginBottom: 5,
        fontSize: 13,
        color: Colors.secondary,
        fontWeight: "500",
    },
    input: {
        borderColor: Colors.secondary,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 40,
    },
    featuresContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    featureButton: {
        width: "48%",
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.secondary,
        alignItems: "center",
        marginBottom: 10,
    },
    featureButtonSelected: {
        backgroundColor: Colors.darkBlue,
    },
    featureText: {
        color: Colors.secondary,
        fontWeight: "bold",
    },
    imagePicker: {
        backgroundColor: Colors.darkBlue,
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 15,
    },
    imagePickerText: {
        color: "#fff",
        fontWeight: "bold",
    },
    imagePreviewContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    previewImage: {
        width: "48%",
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    modalButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    modalButtonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default AddCarScreen;