import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { packageData } from "@/constants/dummy";
import FloatingButton from "@/components/FloatingButton";


const PackageVehicleListScreen = () => {
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
              <TouchableOpacity style={styles.photosButton} onPress={() => router.push("all_photos")}>
                <Text style={styles.photosButtonText}>Photos</Text>
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
});

export default PackageVehicleListScreen;
