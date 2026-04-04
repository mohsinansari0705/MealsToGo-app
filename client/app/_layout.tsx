import React, { useState } from 'react';
import { Slot } from 'expo-router';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { ThemeProvider } from '../theme/ThemeContext';
import { AppContext, ContextData } from '@/common/context/AppContext';
import { AppBottomBar } from '../components/common/AppBottomBar';
import { LayoutContext, LayoutData } from '../common/context/LayoutContext';


export default function App() {
  const [context, setContext] = useState(new ContextData());
  const [layoutContext, setLayoutContext] = useState(new LayoutData());

  const [fontsLoaded] = useFonts({
    Lato_400Regular: require('../assets/fonts/Lato-Regular.ttf'),
    Oswald_400Regular: require('../assets/fonts/Oswald-Regular.ttf'),
    Ubuntu_400Regular: require('../assets/fonts/Ubuntu-Regular.ttf'),
  });
  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar style='auto' animated={true} />

      <SafeAreaProvider>
        <ThemeProvider>
          <AppContext.Provider value={{ context, setContext }}>
            <LayoutContext.Provider value={{ layoutContext, setLayoutContext }}>
              <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, paddingBottom: layoutContext.bottomBarVisible ? layoutContext.bottomBarHeight : 0 }}>
                  <Slot />
                </View>

                <AppBottomBar basePath='/' />
              </SafeAreaView>
            </LayoutContext.Provider>
          </AppContext.Provider>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
}
