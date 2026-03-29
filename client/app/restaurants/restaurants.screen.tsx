import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RestaurantInfoCard } from '../../components/RestaurantInfoCard';
import { useTheme } from '../../theme/ThemeContext';


export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const theme = useTheme().theme;

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
        data={[ {name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5} ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name.toString()}
        contentContainerStyle={{ paddingHorizontal: theme.space.md, gap: theme.space.md, marginBottom: theme.space.xl }}
      />
    </SafeAreaView>
  );
};
