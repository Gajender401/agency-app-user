import GlobalProvider from '@/context/GlobalProvider';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Toast from 'react-native-toast-message';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/onbording" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/welcome" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/login" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/signup" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/forgotPassword" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/verify" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/accountCreatedDone" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/premiumDone" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/resetPasswordDone" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/resetPassword" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/editProfile" options={{ headerShown: false }} />

        <Stack.Screen name="(modals)/(home)/route" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/(home)/package" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/(home)/staff" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/(home)/staff_details" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/(home)/drivers_list" options={{  headerShadowVisible:false, headerTitle:"Driver List", headerTitleAlign:"center" }} />
        <Stack.Screen name="(modals)/(home)/cleaners_list" options={{ headerShadowVisible:false, headerTitle:"Cleaner List", headerTitleAlign:"center" }} />
        <Stack.Screen name="(modals)/(home)/vehicle_documents" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/(home)/vehicle_maintenance" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/(home)/driver_available" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/(home)/technician_support" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/(home)/vehicle_management" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/(home)/vehicle_transaction" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/(home)/vehicle_inspection" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/(home)/vehicle_servicing_history" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/(home)/(forms)/edit_profile" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)/(home)/all_vehicle_list" options={{ headerShadowVisible:false, headerTitle:"All Vehicle List", headerTitleAlign:"center" }} />
        <Stack.Screen name="(modals)/(home)/car_list" options={{ headerShadowVisible:false, headerTitle:"Car List", headerTitleAlign:"center" }} />


        <Stack.Screen name="(modals)/(home)/(forms)/add_cleaner" options={{ headerShadowVisible:false, headerTitle:"Add Cleaner", headerTitleAlign:"center" }} />
        <Stack.Screen name="(modals)/(home)/(forms)/add_driver" options={{ headerShadowVisible:false, headerTitle:"Add Driver", headerTitleAlign:"center" }} />
        <Stack.Screen name="(modals)/(home)/(forms)/add_car" options={{ headerShadowVisible:false, headerTitle:"Add Car", headerTitleAlign:"center" }} />


        <Stack.Screen name="+not-found" />
      </Stack>
      <Toast />
    </GlobalProvider>
  );
}
