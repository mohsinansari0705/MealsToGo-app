import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { useTheme } from '@/theme/ThemeContext';
import { LocationContext } from '@/common/context/LocationContext';


export const SearchBar = () => {
  const locationContext = useContext(LocationContext);
  const search = locationContext.search;
  const theme = useTheme().theme;

  const [searchKeyword, setSearchKeyword] = useState<string>(
    locationContext.keyword
  );

  useEffect(() => {
    search(searchKeyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View
      style={{
        paddingHorizontal: theme.space.md,
        paddingVertical: theme.space.sm * 1.5,
      }}
    >
      <Searchbar
        placeholder='Search for a location'
        value={searchKeyword}
        onSubmitEditing={() => {
          if (!search) return;
          if (
            locationContext.keyword.toLowerCase() ===
            searchKeyword.toLowerCase()
          ) {
            return;
          }
          search(searchKeyword);
        }}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </View>
  );
};
