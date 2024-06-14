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

        <Stack.Screen name="+not-found" />
      </Stack>
      <Toast />
    </GlobalProvider>
  );
}
