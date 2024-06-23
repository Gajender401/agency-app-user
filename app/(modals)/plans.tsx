import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Colors } from "@/constants/Colors"; // Assuming you have a Colors file for color constants

const keyFeatures = [
  "Priority Support & Technician Assistance",
  "Unlimited Access to All Features",
];

const plans = [
  { name: "Annual Plan", price: "₹ 599 / Yearly" },
];

const PlansScreen: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  const renderFeature = ({ item }: { item: string }) => (
    <View style={styles.featureItem}>
      <Text style={styles.featureText}>• {item}</Text>
    </View>
  );

  const renderPlan = ({ item }: { item: { name: string; price: string } }) => (
    <TouchableOpacity
      style={[
        styles.planItem,
        selectedPlan === item.name && styles.selectedPlanItem
      ]}
      onPress={() => handlePlanSelect(item.name)}
    >
      <Text style={[
        styles.planName,
        selectedPlan === item.name && styles.selectedPlanText
      ]}>
        {item.name}
      </Text>
      <Text style={[
        styles.planPrice,
        selectedPlan === item.name && styles.selectedPlanText
      ]}>
        {item.price}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.featuresContainer}>
        <Text style={styles.sectionTitle}>Key Features:</Text>
        <FlatList
          data={keyFeatures}
          renderItem={renderFeature}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.plansContainer}>
        <FlatList
          data={plans}
          renderItem={renderPlan}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.continueButton,
          selectedPlan ? styles.activeButton : styles.disabledButton
        ]}
        disabled={!selectedPlan}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  featuresContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.darkBlue,
  },
  featureItem: {
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    color: Colors.secondary,
  },
  plansContainer: {
    marginBottom: 20,
  },
  planItem: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedPlanItem: {
    borderColor: Colors.darkBlue,
    backgroundColor: Colors.secondary,
  },
  selectedPlanText: {
    color: "#fff",
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: Colors.darkBlue,
  },
  planPrice: {
    fontSize: 16,
    color: Colors.secondary,
  },
  continueButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  activeButton: {
    backgroundColor: Colors.darkBlue,
  },
  disabledButton: {
    backgroundColor: "gray",
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#ffff",
  },
});

export default PlansScreen;
