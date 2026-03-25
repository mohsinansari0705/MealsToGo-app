import React, { useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RestaurantInfoCard } from '../../components/RestaurantInfoCard';


export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
      <View style={{ paddingVertical: 12 }}>
        <Searchbar
          placeholder='Search'
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>

      <RestaurantInfoCard
        restaurants={{
          name: 'Some Restaurant',
          icon: 'random Icon',
          photos: [
            'https://imgs.search.brave.com/qLazr26Lu6vYYB-vHR6zUvWJh-KaXqczO7trkHnx8iY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MjU4MTM1MDYwNjIt/MGFlYjFkN2EwOTRi/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1URjhmR0oxY21k/bGNueGxibnd3Zkh3/d2ZIeDhNQT09',
          ],
          address: '100 some random street',
          isOpenNow: true,
          rating: 4,
          isClosedTemporarily: false,
        }}
      />
    </SafeAreaView>
  );
};
