import React, { useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    Image,
} from "react-native";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";

const EnterOTPScreen = () => {
    const [otp, setOTP] = useState('');

    const handleVerifyOTP = () => {
        router.push("(modals)/resetPassword");
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Image style={styles.wave_image} source={require('@/assets/images/wave.png')} />

            <View style={{marginTop:150}} >
                <Text style={styles.headingText}>Enter OTP</Text>
            </View>

            <View style={styles.innerContainer} >
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Enter OTP"
                        value={otp}
                        onChangeText={setOTP}
                        style={styles.input}
                        placeholderTextColor="#FFFFFF"
                        keyboardType="numeric"
                    />
                </View>

                <TouchableOpacity onPress={handleVerifyOTP} style={styles.button}>
                    <Text style={styles.buttonText}>Verify OTP</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: StatusBar.currentHeight,
        padding: 20,
    },
    innerContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flex: 1,
    },
    headingText: {
        color: "#10354B",
        fontSize: 32,
        fontWeight: '600',
    },
    wave_image: {
        width: "110%",
        position: "absolute",
        height: 300,
    },
    inputContainer: {
        width: "100%",
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: "#86D0FB",
        borderRadius: 20,
        padding: 10,
        width: "100%",
        backgroundColor: "#86D0FB",
        color: "#FFFFFF",
        paddingHorizontal: 20,
    },
    button: {
        borderColor: Colors.primary,
        borderRadius: 30,
        paddingVertical: 10,
        alignItems: "center",
        paddingHorizontal: 50,
        marginTop: 20,
        borderWidth:1
    },
    buttonText: {
        fontSize: 18,
    },
});

export default EnterOTPScreen;
