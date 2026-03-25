import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RestaurantsScreen } from './app/restaurants/restaurants.screen';
import { ThemeProvider } from './theme/ThemeContext';


export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular: require('./assets/fonts/Lato-Regular.ttf'),
    Oswald_400Regular: require('./assets/fonts/Oswald-Regular.ttf'),
    Ubuntu_400Regular: require('./assets/fonts/Ubuntu-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar style='auto' animated={true} />

      <SafeAreaProvider>
        <ThemeProvider>
          <RestaurantsScreen />
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
}
