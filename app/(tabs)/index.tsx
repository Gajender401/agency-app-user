import React, { useState } from 'react';
import { StyleSheet, StatusBar, View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useGlobalContext } from '@/context/GlobalProvider';
import { Redirect, router } from 'expo-router';
import Loader from '@/components/loader';
import { Colors } from '@/constants/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const carouselImages = [
  'https://imgd.aeplcdn.com/664x374/n/cw/ec/107719/range-rover-exterior-right-front-three-quarter-46.jpeg?isig=0&q=80',
  'https://imgd.aeplcdn.com/664x374/n/cw/ec/107719/range-rover-exterior-right-front-three-quarter-23.jpeg?isig=0&q=80',
  'https://imgd.aeplcdn.com/664x374/n/cw/ec/107719/new-range-rover-exterior-right-side-view.jpeg?isig=0&q=80'
];

const { width: deviceWidth } = Dimensions.get('window');

export default function HomeScreen() {
  const { isLogged, loading } = useGlobalContext();
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
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        <View style={styles.carouselContainer}>
          <Carousel
            width={deviceWidth * 0.9}
            height={deviceWidth * 0.6}
            autoPlay
            data={carouselImages}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={styles.carouselImage} />
            )}
          />
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.divider}>
            <Text style={styles.dividerText}>Lorem Ipsum</Text>
          </View>
        </View>

        <View style={styles.grid}>
          <TouchableOpacity onPress={() => router.push('daily_route_vehicles')} style={styles.gridItem}>
            <Image source={require(`@/assets/images/route.png`)} style={styles.icon} />
            <Text style={styles.iconText}>Daily Route Vehicles</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('package_vehicle_booking')} style={styles.gridItem}>
            <Image source={require(`@/assets/images/package.png`)} style={styles.icon} />
            <Text style={styles.iconText}>Package Vehicle Booking</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('vehicle_servicing_history')} style={styles.gridItem}>
            <Image source={require(`@/assets/images/vehicle_servicing_history.png`)} style={styles.icon} />
            <Text style={styles.iconText}>Vehicle Servicing History</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('employee_list')} style={styles.gridItem}>
            <Image source={require(`@/assets/images/staff_details.png`)} style={styles.icon} />
            <Text style={styles.iconText}>Employee Details</Text>
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
            <Image source={require(`@/assets/images/vehicle_management.png`)} style={styles.icon} />
            <Text style={styles.iconText}>All Vehicle List</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('technician_support')} style={styles.gridItem}>
            <Image source={require(`@/assets/images/technician_support.png`)} style={styles.icon} />
            <Text style={styles.iconText}>Technician Support</Text>
          </TouchableOpacity>

          {showMore && (
            <>
              <TouchableOpacity onPress={() => router.push('vehicle_maintenance')} style={styles.gridItem}>
                <Image source={require(`@/assets/images/vehicle_maintenance.png`)} style={styles.icon} />
                <Text style={styles.iconText}>Vehicle Maintenance</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('vehicle_inspection')} style={styles.gridItem}>
                <Image source={require(`@/assets/images/vehicle_inspection.png`)} style={styles.icon} />
                <Text style={styles.iconText}>Vehicle Inspection</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.divider}>
            <Text style={styles.dividerText}>Lorem Ipsum</Text>
          </View>
        </View>
        
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://via.placeholder.com/300x200.png?text=Random+Image' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>This is a card</Text>
        </View>

        <Text style={styles.whatsNewHeading}>What's New</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x200.png?text=Random+Image' }}
          style={styles.whatsNewImage}
        />
        <View style={styles.socialMediaContainer}>
          <View style={styles.socialMediaIcon}>
          <AntDesign name="instagram" size={24} color={Colors.primary}  />
            <Text style={styles.socialText}>Instagram</Text>
          </View>
          <View style={styles.socialMediaIcon}>
          <AntDesign name="facebook-square" size={24} color={Colors.primary} />
            <Text style={styles.socialText}>Facebook</Text>
          </View>
          <View style={styles.socialMediaIcon}>
          <AntDesign name="youtube" size={24} color={Colors.primary} />
            <Text style={styles.socialText}>YouTube</Text>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: StatusBar.currentHeight,
  },
  carouselContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  carouselImage: {
    height: deviceWidth * 0.6,
    borderRadius: 10,
  },
  dividerContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
    width: '100%',
    position: 'relative',
    alignItems: 'center',
  },
  dividerText: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    paddingHorizontal: 5,
    top: -10,
    color: Colors.secondary
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 20,
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    margin: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  cardText: {
    marginTop: 10,
    marginBottom:5,
    fontSize: 13,
    textAlign: 'center',
    paddingHorizontal:12,
    paddingVertical:2,
    fontWeight:"600"
  },
  whatsNewHeading: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.primary,
    textAlign: 'center',
    marginVertical: 20,
  },
  whatsNewImage: {
    width: deviceWidth * 0.9,
    height: deviceWidth * 0.5,
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 20,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  socialMediaIcon: {
    alignItems: 'center',
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
  socialText: {
    marginTop: 5,
    fontSize: 11,
    color: Colors.primary,
    textAlign: 'center',
  },
});
