import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../../components/RestaurantInfoCard";


export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
      <View style={{ paddingVertical: 12 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>

      <RestaurantInfoCard />
    </SafeAreaView>
  );
};
