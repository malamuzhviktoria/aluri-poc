import '../global.css';

import { Anton_400Regular, useFonts } from '@expo-google-fonts/anton';
import { PortalHost } from '@rn-primitives/portal';
import { Stack, ThemeProvider } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { DevicePreview } from '@/components/dev/device-preview';
import { NAV_THEME, THEME } from '@/lib/theme';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Anton_400Regular });
  if (!fontsLoaded) return null;

  return (
    <DevicePreview>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider style={{ flex: 1 }}>
          <ThemeProvider value={NAV_THEME}>
            <StatusBar style="dark" />
            <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: THEME.background } }}>
              <Stack.Screen name="(tabs)" />
            </Stack>
            <PortalHost />
          </ThemeProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </DevicePreview>
  );
}
