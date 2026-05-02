import React, { createContext, useState } from 'react';
import { getLocation } from '../api/location';
import { Coords } from '../types/types';


type LocationContextType = {
  keyword: string;
  location: Coords | null;
  search: (keyword: string) => Promise<Coords>;
};

export const locationContextDefaultValues: LocationContextType = {
  keyword: 'San Francisco',
  location: { lat: 0, lng: 0 },
  search: async (_keyword: string) => {
    return { lat: 0, lng: 0 };
  },
};

export const LocationContext = createContext<LocationContextType>(
  locationContextDefaultValues
);


export const LocationContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [keyword, setKeyword] = useState<string>('San Francisco');
  const [location, setLocation] = useState<Coords | null>(null);

  const onSearch = async (searchKeyword: string): Promise<Coords> => {
    if (!searchKeyword.length) {
      // do nothing if the search keyword is empty
      return location as Coords;
    }

    const k = searchKeyword.toLowerCase();
    setKeyword(k);

    try {
      const result = getLocation(k);
      setLocation(result);
      return result;
    } catch (err: any) {
      setLocation(null);
      throw new Error(err.message as string);
    }
  };

  return (
    <LocationContext.Provider
      value={{
        keyword,
        location,
        search: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
