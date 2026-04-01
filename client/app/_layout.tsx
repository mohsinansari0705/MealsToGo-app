import React from 'react';
import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from './theme/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RestaurantsScreen } from './app/restaurants/restaurants.screen';


const Tab = createBottomTabNavigator();
const TAB_ICON: Record<string, keyof typeof Ionicons.glyphMap> = {
  Restaurants: 'restaurant',
  Map: 'map-sharp',
  Settings: 'settings',
};

const Map = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Map!</Text>
  </View>
);
const Settings = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings!</Text>
  </View>
);

const tabScreenOptions = ({ route }: { route: any }) => {
  let iconName = TAB_ICON[route.name];

  return {
    headerTransparent: true,
    headerTitle: '',
    tabBarIcon: ({ color, size }: { color: string; size: number }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  };
};


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
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName='Restaurants'
              screenOptions={tabScreenOptions}
            >
              <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
              <Tab.Screen name='Map' component={Map} />
              <Tab.Screen name='Settings' component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
}
