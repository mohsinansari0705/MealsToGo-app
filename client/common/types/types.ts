export type User = {
  id: string;
  name: string;
  email: string;
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
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      lat: number;
      lng: number;
    };
    southwest: {
      lat: number;
      lng: number;
    };
  };
};

export type ApiError = {
  code: string;
  message: string;
  status?: number;
};
