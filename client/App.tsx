import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RestaurantsScreen } from './app/restaurants/restaurants.screen';
import { ThemeProvider } from './theme/ThemeContext';


export default function App() {
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
