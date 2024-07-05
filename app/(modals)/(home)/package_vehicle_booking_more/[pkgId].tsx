import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Colors } from '@/constants/Colors'; // Ensure to import your color constants
import { useLocalSearchParams } from 'expo-router';
import { useGlobalContext } from '@/context/GlobalProvider';


function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  return `${month}/${day}/${year}`;
}

const VehicleDetailsScreen: React.FC = () => {
  const { pkgId } = useLocalSearchParams();
  const [vehicleDetails, setVehicleDetails] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);
  const { apiCaller } = useGlobalContext();

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await apiCaller.get(`/api/packageBooking/${pkgId}`);
        setVehicleDetails(response.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackageDetails();
  }, [pkgId]);

  if (loading) {
    return <ActivityIndicator size="large" color={Colors.darkBlue} />;
  }

  if (!vehicleDetails) {
    return <Text style={styles.errorText}>Failed to load vehicle details.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Vehicle Number:</Text>
        {vehicleDetails.vehicle ?
        <Text style={styles.value}>{vehicleDetails.vehicle.number}</Text>
        :
        <Text style={styles.value}>NA</Text>
        }
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Other Vehicle Number:</Text>
        <Text style={styles.value}>{vehicleDetails.otherVehicle}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Customer Name:</Text>
        <Text style={styles.value}>{vehicleDetails.customerName}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Mobile Number:</Text>
        <Text style={styles.value}>{vehicleDetails.mobileNumber}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Alternate Number/ WhatsApp Number:</Text>
        <Text style={styles.value}>{vehicleDetails.alternateNumber}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Km Starting:</Text>
        <Text style={styles.value}>{vehicleDetails.kmStarting}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Per Km Rate:</Text>
        <Text style={styles.value}>{vehicleDetails.perKmRateInINR}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Advanced Amount:</Text>
        <Text style={styles.value}>{vehicleDetails.advanceAmountInINR}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Remaining Amount:</Text>
        <Text style={styles.value}>{vehicleDetails.remainingAmountInINR}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Departure Place:</Text>
        <Text style={styles.value}>{vehicleDetails.departurePlace}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Destination Place:</Text>
        <Text style={styles.value}>{vehicleDetails.destinationPlace}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Departure Time:</Text>
        <Text style={styles.value}>{formatDate(vehicleDetails.departureTime)}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Return Time:</Text>
        <Text style={styles.value}>{formatDate(vehicleDetails.returnTime)}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Toll:</Text>
        <Text style={styles.value}>{vehicleDetails.tollInINR}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Other State Tax:</Text>
        <Text style={styles.value}>{vehicleDetails.otherStateTaxInINR}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Instructions:</Text>
        <Text style={styles.value}>{vehicleDetails.instructions}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Add Note:</Text>
        <Text style={styles.value}>{vehicleDetails.note}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 10,
  },
  label: {
    color: Colors.secondary,
    fontWeight: 'semibold',
    fontSize: 16,
  },
  value: {
    fontSize: 14,
    marginBottom: 4,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default VehicleDetailsScreen;
