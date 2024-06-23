import React, { useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
  ActivityIndicator,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { BlurView } from 'expo-blur';
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { packageData } from "@/constants/dummy";
import FloatingButton from "@/components/FloatingButton";

const { width: deviceWidth } = Dimensions.get('window');

interface BlurOverlayProps {
  visible: boolean;
  onRequestClose: () => void;
}

const BlurOverlay: React.FC<BlurOverlayProps> = ({ visible, onRequestClose }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={onRequestClose}
  >
    <TouchableOpacity onPress={onRequestClose} style={styles.overlay}>
      <BlurView intensity={90} tint="light" style={styles.overlay} />
    </TouchableOpacity>
  </Modal>
);

const PackageVehicleListScreen = () => {
  const [showStartTripModal, setShowStartTripModal] = useState(false);
  const [beforeJourneyNote, setBeforeJourneyNote] = useState("");
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleStartTrip = () => {
    if (!beforeJourneyNote || selectedPhotos.length === 0) {
      Alert.alert("Please add a note and select photos.");
      return;
    }

    const tripData = {
      beforeJourneyNote,
      selectedPhotos,
    };

    console.log("Trip Data:", tripData);

    // Simulate loading state (you can replace this with actual API call)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      resetForm();
      Alert.alert("Success", "Trip started successfully!");
      setShowStartTripModal(false);
    }, 1500);
  };

  const handleDelete = () => {
    // Implement delete logic here
    console.log("Deleting route...");
    setShowDeleteModal(false);
  };

  const resetForm = () => {
    setBeforeJourneyNote("");
    setSelectedPhotos([]);
  };

  const pickImage = async () => {
    let result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: 5,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedPhotos([...selectedPhotos, ...result.assets.map((asset) => asset.uri)]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <FontAwesome5 name="search" size={18} color={Colors.secondary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={Colors.secondary}
        />
      </View>

      {/* Package List */}
      <ScrollView style={styles.packagesList}>
        {packageData.map((pkg, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <TouchableOpacity style={styles.editButton} onPress={() => setShowStartTripModal(true)}>
                <Text style={styles.editButtonText}>Start Trip</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowDeleteModal(true)}>
                <MaterialIcons name="delete" size={24} color={Colors.darkBlue} />
              </TouchableOpacity>
            </View>

            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }} >
              <Text style={{ fontWeight: "600", fontSize: 14 }} >Departure</Text>
              <Text style={{ fontWeight: "600", fontSize: 14 }} >Destination</Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-around", marginVertical: 5 }} >
              <Text style={{ fontWeight: "600", fontSize: 15 }} >{pkg.departurePlace}</Text>
              <MaterialIcons name="keyboard-double-arrow-right" size={24} color={Colors.darkBlue} />
              <Text style={{ fontWeight: "600", fontSize: 15 }} >{pkg.destinationPlace}</Text>
            </View>

            <Text style={styles.cardText}>Customer Name: {pkg.customerName}</Text>
            <Text style={styles.cardText}>Journey Duration: {pkg.departureTime} to {pkg.returnTime}</Text>
            <Text style={styles.cardText}>Vehicle Number: {pkg.vehicleNumber}</Text>
            <Text style={styles.cardText}>Other Vehicle: {pkg.otherVehicleNumber}</Text>

            <TouchableOpacity
              style={styles.viewMoreButton}
              onPress={() => router.push("package_vehicle_booking_more")}
            >
              <Text style={styles.viewMoreButtonText}>View More</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>


      {/* Delete Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showDeleteModal}
        onRequestClose={() => setShowDeleteModal(false)}
      >
        <BlurOverlay visible={showDeleteModal} onRequestClose={() => setShowDeleteModal(false)} />

        <TouchableWithoutFeedback onPress={() => setShowDeleteModal(false)}>
          <View style={styles.modalOverlay}>
            <View style={[styles.modalContainer, { height: 200 }]}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Are you sure you want to delete this route?</Text>
                <View style={styles.modalButtons}>
                  <TouchableOpacity style={[styles.modalButton, { backgroundColor: "#ccc" }]} onPress={() => setShowDeleteModal(false)}>
                    <Text style={styles.modalButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.modalButton, { backgroundColor: Colors.darkBlue }]} onPress={handleDelete}>
                    <Text style={[styles.modalButtonText, { color: "#fff" }]}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Start Trip Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showStartTripModal}
        onRequestClose={() => setShowStartTripModal(false)}
      >
        <BlurOverlay visible={showStartTripModal} onRequestClose={() => setShowStartTripModal(false)} />

        <TouchableOpacity onPress={() => setShowStartTripModal(false)} style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView style={styles.modalScroll}>
              <View style={styles.modalContent}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Before Journey Note</Text>
                  <TextInput
                    style={styles.input}
                    value={beforeJourneyNote}
                    onChangeText={(text) => setBeforeJourneyNote(text)}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Before Journey </Text>
                  <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
                    <Text style={styles.photoButtonText}>Select Photos</Text>
                  </TouchableOpacity>
                  <Text style={styles.maxPhotosText}>Max 5 photos</Text>
                  <ScrollView horizontal>
                    {selectedPhotos.map((photoUri, index) => (
                      <Image
                        key={index}
                        source={{ uri: photoUri }}
                        style={styles.photo}
                      />
                    ))}
                  </ScrollView>
                </View>

                <View style={styles.modalButtons}>
                  <TouchableOpacity
                    style={[styles.modalButton, { backgroundColor: Colors.darkBlue }]}
                    onPress={handleStartTrip}
                  >
                    {loading ? (
                      <ActivityIndicator color="#fff" />
                    ) : (
                      <Text style={[styles.modalButtonText, { color: "#fff" }]}>Start Trip</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
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
  addButton: {
    backgroundColor: Colors.darkBlue,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
    width: 140,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  packagesList: {
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
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
    alignItems: "center",
    gap: 5,
  },
  editButton: {
    backgroundColor: Colors.darkBlue,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 5,
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  cardText: {
    marginBottom: 8,
    color: Colors.secondary,
    fontWeight: "500",
    fontSize: 15,
  },
  viewMoreButton: {
    backgroundColor: Colors.darkBlue,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  viewMoreButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: deviceWidth * 0.8,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalScroll: {
    width: "100%",
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    color: Colors.secondary,
  },
  input: {
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: Colors.secondary,
  },
  photoButton: {
    backgroundColor: Colors.darkBlue,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  photoButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  maxPhotosText: {
    color: Colors.secondary,
    marginBottom: 10,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  modalButtonText: {
    fontWeight: "bold",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
  },
});

export default PackageVehicleListScreen;
