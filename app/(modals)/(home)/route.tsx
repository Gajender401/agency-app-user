import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";

const WelcomeScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image style={styles.wave_image} source={require('@/assets/images/wave.png')} />
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={require('@/assets/images/welcome.png')} />
        <View style={styles.button_container}>
          <Image style={{ marginBottom: 10 }} source={require('@/assets/images/tourist_text.png')} />
          <TouchableOpacity onPress={()=> router.push("/(modals)/login")} style={styles.button}>
            <Text style={styles.buttonText}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> router.push("/(modals)/signup")} style={styles.button}>
            <Text style={styles.buttonText}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
    width: "100%",
    gap:80,
    paddingBottom:100
  },
  image: {
    width: 200,
    height: 200,
  },
  button_container: {
    width: 240,
    gap: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderRadius: 30,
    borderWidth: 2,
    paddingVertical: 10,
    alignItems: "center",
    width: "100%",
    borderColor:Colors.primary
  },
  buttonText: {
    fontSize: 21,
  },
  wave_image: {
    width: "110%",
    position: "absolute",
    height: 300,
    top:0
},
});

export default WelcomeScreen;
