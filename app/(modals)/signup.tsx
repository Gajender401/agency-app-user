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
    ScrollView,
} from "react-native";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import Checkbox from 'expo-checkbox';

const SignUpScreen = () => {
    const [ownerName, setOwnerName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [contact, setContact] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSignUp = () => {
        router.push("/(modals)/accountCreatedDone");
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Image style={styles.wave_image} source={require('@/assets/images/wave.png')} />

            <View style={{marginTop:150}} >
                <Text style={styles.headingText}>Create</Text>
                <Text style={styles.headingText}>Account</Text>
            </View>

            <View style={styles.innerContainer} >
                <ScrollView style={styles.inputContainer}>
                    <TextInput
                        placeholder="Owner Name"
                        value={ownerName}
                        onChangeText={setOwnerName}
                        style={styles.input}
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput
                        placeholder="Company Name"
                        value={companyName}
                        onChangeText={setCompanyName}
                        style={styles.input}
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput
                        placeholder="Contact"
                        value={contact}
                        onChangeText={setContact}
                        style={styles.input}
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput
                        placeholder="WhatsApp Number"
                        value={whatsapp}
                        onChangeText={setWhatsapp}
                        style={styles.input}
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput
                        placeholder="City"
                        value={city}
                        onChangeText={setCity}
                        style={styles.input}
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput
                        placeholder="State"
                        value={state}
                        onChangeText={setState}
                        style={styles.input}
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        placeholderTextColor="#FFFFFF"
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                        placeholderTextColor="#FFFFFF"
                    />
                    {/* <View style={styles.optionsContainer}>
                        <View style={styles.termsContainer}>
                            <Checkbox
                                value={termsAccepted}
                                onValueChange={setTermsAccepted}
                            />
                            <Text style={styles.termsText}>I accept the Terms & Conditions</Text>
                        </View>
                    </View> */}
                </ScrollView>

                <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Already have an account? </Text>
                    <TouchableOpacity onPress={()=>router.push("(modals)/login")} >
                    <Text style={{fontWeight:"800"}} >Login</Text>
                    </TouchableOpacity>
                </View>
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
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        flex: 1,
    },
    headingText: {
        color: "#10354B",
        fontSize: 32,
        fontWeight: '600',
    },
    inputContainer: {
        width: "100%",
        backgroundColor:"#FFFF",
        marginVertical:10
    },
    wave_image: {
        width: "110%",
        position: "absolute",
        height: 300,
    },
    input: {
        borderWidth: 1,
        borderColor: "#86D0FB",
        borderRadius: 20,
        padding: 10,
        marginVertical: 10,
        width: "100%",
        backgroundColor: "#86D0FB",
        color: "#FFFFFF",
        paddingHorizontal: 20,
    },
    optionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    termsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    termsText: {
        marginLeft: 5,
    },
    button: {
        borderRadius: 30,
        borderWidth: 1,
        paddingVertical: 10,
        alignItems: "center",
        paddingHorizontal: 50,
        borderColor: Colors.primary,
    },
    buttonText: {
        fontSize: 21,
        color: Colors.primary,
    },
    loginContainer: {
        marginTop: 20,
        flexDirection: "row",
    },
    loginText: {
        color: Colors.primary,
        fontSize: 14,
    },
});

export default SignUpScreen;
