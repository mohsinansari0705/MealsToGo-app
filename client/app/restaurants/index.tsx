import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import { Restaurant } from '@/common/types/types';
import { useTheme } from '../../theme/ThemeContext';
import { AppContext } from '@/common/context/AppContext';
import { getApiErrorMessage } from '@/common/api/api.errors';
import { LocationContext } from '@/common/context/LocationContext';
import { RestaurantInfoCard } from '../../components/RestaurantInfoCard';
import { SearchBar } from '../../components/restaurants/SearchComponent';


export default function RestaurantsScreen() {
  const theme = useTheme().theme;
  const appContext = useContext(AppContext);
  const locationContext = useContext(LocationContext);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const fetchRestaurantsData = async (lat: number, lng: number) => {
    setError(null);
    setLoading(true);
    setRestaurants([]);

    try {
      const api = appContext.context.api;
      
      const [restaurantsData] = await Promise.all([
        api.getRestaurants(lat, lng),
      ]);
      setRestaurants(restaurantsData);

      setLoading(false);
    } catch (err) {
      setError(getApiErrorMessage(err));
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!locationContext.location) {
      return;
    } else {
      const { lat, lng } = locationContext.location;
      fetchRestaurantsData(lat, lng);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationContext.location]);

  if (error) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SearchBar />
        <View style={{ flex: 1, paddingHorizontal: theme.space.xxl * 2, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center' }}>
            {error}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SearchBar />
        <View style={{ flex: 1, paddingHorizontal: theme.space.xxl * 2, justifyContent: 'center' }}>
          <ActivityIndicator size={theme.space.xl * 1.25} />
        </View>
      </SafeAreaView>
    );
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearchBar />

      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: theme.space.md,
          gap: theme.space.md,
          marginBottom: theme.space.xl,
        }}
      />
    </SafeAreaView>
  );
}
