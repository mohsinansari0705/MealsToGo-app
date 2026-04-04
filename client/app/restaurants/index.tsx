import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '../../theme/ThemeContext';
import { AppContext } from '@/common/context/AppContext';
import { getApiErrorMessage } from '@/common/api/api.errors';
import { RestaurantInfoCard } from '../../components/RestaurantInfoCard';


export default function RestaurantsScreen() {
  const appContext = useContext(AppContext);
  const theme = useTheme().theme;

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const fetchRestaurantsData = async () => {
    setLoading(true);
    try {
      const api = appContext.context.api;
      const [restaurantsData] = await Promise.all([
        api.getRestaurants(),
      ]);
      setRestaurants(restaurantsData);

      setLoading(false);
    } catch (err) {
      setError(getApiErrorMessage(err));
      console.log('Error fetching restaurants data:', error);

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size={theme.space.xl * 1.25} />
      </SafeAreaView>
    );
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: theme.space.md, paddingVertical: theme.space.sm * 1.5 }}>
        <Searchbar
          placeholder='Search'
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>

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
