import React, { useState } from 'react';
import { StyleSheet, StatusBar, View, Text, Image, TouchableOpacity } from 'react-native';

import { useGlobalContext } from '@/context/GlobalProvider';
import { Redirect, router } from 'expo-router';
import Loader from '@/components/loader';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  const { isLogged, loading, apiCaller, token } = useGlobalContext();
  const [showMore, setShowMore] = useState(false);

  if (!loading && isLogged) return <Redirect href="/(modals)/onbording" />;

  if (loading) {
    return (
      <View style={styles.container}>
        <Loader loading />
      </View>
    );
  }

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <TouchableOpacity onPress={() => router.push('daily_route_vehicles')} style={styles.gridItem}>
          <Image source={require(`@/assets/images/route.png`)} style={styles.icon} />
          <Text style={styles.iconText}>Daily Route Vehicles</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('package_vehicle_booking')} style={styles.gridItem}>
          <Image source={require(`@/assets/images/package.png`)} style={styles.icon} />
          <Text style={styles.iconText}>Package Vehicle Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('staff')} style={styles.gridItem}>
          <Image source={require(`@/assets/images/staff.png`)} style={styles.icon} />
          <Text style={styles.iconText}>Staff Management</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('sell_vehicle')} style={styles.gridItem}>
          <Image source={require(`@/assets/images/staff.png`)} style={styles.icon} />
          <Text style={styles.iconText}>Sell Vehicle</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('employee_list')} style={styles.gridItem}>
          <Image source={require(`@/assets/images/staff_details.png`)} style={styles.icon} />
          <Text style={styles.iconText}>Staff Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('drivers_list')} style={styles.gridItem}>
          <Image source={require(`@/assets/images/drivers_list.png`)} style={styles.icon} />
          <Text style={styles.iconText}>Driver’s List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('cleaners_list')} style={styles.gridItem}>
          <Image source={require(`@/assets/images/cleaners_list.png`)} style={styles.icon} />
          <Text style={styles.iconText}>Cleaner’s List</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('vehicle_documents')} style={styles.gridItem}>
          <Image source={require(`@/assets/images/vehicle_documents.png`)} style={styles.icon} />
          <Text style={styles.iconText}>Vehicle Documents</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('all_vehicle_list')} style={styles.gridItem}>
          <Image source={require(`@/assets/images/vehicle_maintenance.png`)} style={styles.icon} />
          <Text style={styles.iconText}>All Vehicle List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('driver_available')} style={styles.gridItem}>
          <Image source={require(`@/assets/images/driver_available.png`)} style={styles.icon} />
          <Text style={styles.iconText}>Driver Available</Text>
        </TouchableOpacity>

        {showMore && (
          <>
            <TouchableOpacity onPress={() => router.push('vehicle_maintenance')} style={styles.gridItem}>
              <Image source={require(`@/assets/images/vehicle_maintenance.png`)} style={styles.icon} />
              <Text style={styles.iconText}>Vehicle Maintenance</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('technician_support')} style={styles.gridItem}>
              <Image source={require(`@/assets/images/technician_support.png`)} style={styles.icon} />
              <Text style={styles.iconText}>Technician Support</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('vehicle_management')} style={styles.gridItem}>
              <Image source={require(`@/assets/images/vehicle_management.png`)} style={styles.icon} />
              <Text style={styles.iconText}>Vehicle Management</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('vehicle_transaction')} style={styles.gridItem}>
              <Image source={require(`@/assets/images/vehicle_transaction.png`)} style={styles.icon} />
              <Text style={styles.iconText}>Vehicle Transaction</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('vehicle_inspection')} style={styles.gridItem}>
              <Image source={require(`@/assets/images/vehicle_inspection.png`)} style={styles.icon} />
              <Text style={styles.iconText}>Vehicle Inspection</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('vehicle_servicing_history')} style={styles.gridItem}>
              <Image source={require(`@/assets/images/vehicle_servicing_history.png`)} style={styles.icon} />
              <Text style={styles.iconText}>Vehicle Servicing History</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleShowMore}>
          <Text style={styles.buttonText}>{showMore ? 'View Less' : 'View More'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: StatusBar.currentHeight,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '33.33%',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 50,
    height: 50,
    objectFit: 'contain',
  },
  iconText: {
    marginTop: 5,
    fontSize: 11,
    color: Colors.secondary,
    textAlign: 'center',
    fontWeight: '500',
    width: 80,
    height: 30,
    lineHeight: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
