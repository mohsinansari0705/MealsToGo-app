import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { useTheme } from '@/theme/ThemeContext';
import { LocationContext } from '@/common/context/LocationContext';

type Props = {
  onSearch?: (keyword: string) => Promise<void>;
  onError?: (err: any) => void;
};

export const SearchBar = ({ onSearch, onError }: Props) => {
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
  useEffect(() => {
    setSearchKeyword(locationContext.keyword);
  }, [locationContext.keyword]);

  const handleSubmit = async () => {
    const k = searchKeyword.trim();
    if (!k) return;

    if (
      locationContext.keyword &&
      locationContext.keyword.toLowerCase() === k.toLowerCase()
    ) {
      return;
    }

    if (onSearch) {
      try {
        await onSearch(k);
      } catch (err) {
        onError?.(err);
      }
      return;
    }

    if (!search) return;
    try {
      await search(k);
    } catch (err) {
      onError?.(err);
    }
  };

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
        onSubmitEditing={handleSubmit}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </View>
  );
};
