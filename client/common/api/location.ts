import camelize from 'camelize';
import { Coords, Location } from '../types/types';
import { MOCK_LOCATIONS } from '../constants/mockData';


export const transformLocation = ({ results = [] }: any): Coords => {
  const location: Location = results[0];

  const lat = location.geometry.location.lat;
  const lng = location.geometry.location.lng;

  return { lat, lng };
};

export const getLocation = (searchKeyword: string): Coords => {
  const locationMock = camelize(
    MOCK_LOCATIONS[searchKeyword as keyof typeof MOCK_LOCATIONS]
  );

  if (!locationMock) {
    throw new Error('Location not found!');
  } else {
    return transformLocation(locationMock);
  }
};
