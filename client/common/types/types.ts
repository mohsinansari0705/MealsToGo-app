export type User = {
  id: string;
  name: string;
  email: string;
};

export type Coords = {
  lat: number;
  lng: number;
};

export type Location = {
  geometry: {
    location: Coords;
    viewport: {
      northeast: Coords;
      southwest: Coords;
    };
  };
};

export type Restaurant = {
  id: string;
  name: string;
  address: string;
  photos: string[];
  icon: string;
  rating: number;
  userRatingsTotal?: number;
  types: string[];
  isOpenNow: boolean;
  isClosedTemporarily: boolean;
  geometry: Location;
};

export type ApiError = {
  code: string;
  message: string;
  status?: number;
};
