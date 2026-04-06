import { http } from './http';
import camelize from 'camelize';
import { ApiConfig } from './config';
import type { User, Restaurant } from '../types/types';
import {
  MOCK_USER,
  MOCK_RESTAURANTS,
  MOCK_IMAGES,
} from '../constants/mockData';


function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const transformRestaurant = ({ results = [] }: any) => {
  const restaurants: Restaurant[] = [];

  camelize(results).map((r: any) => {
    const restaurant: Partial<Restaurant> = {};

    restaurant.id = r.placeId;
    restaurant.name = r.name;
    restaurant.address = r.vicinity;
    restaurant.photos = [
      MOCK_IMAGES[Math.floor(Math.random() * MOCK_IMAGES.length)],
    ]; // Using mock images for all restaurants
    restaurant.icon = r.icon;
    restaurant.rating = r.rating;
    restaurant.userRatingsTotal = r.userRatingsTotal;
    restaurant.types = r.types;
    restaurant.isOpenNow =
      r.openingHours?.openNow === true && r.permanentlyClosed !== true;
    restaurant.isClosedTemporarily = r.businessStatus === 'CLOSED_TEMPORARILY';
    restaurant.geometry = r.geometry;

    restaurants.push(restaurant as Restaurant);
  });

  return restaurants;
};

export class Api {
  private readonly useMock: boolean;
  postEvent?: (event: string, payload?: any) => void; // Optional callback for event tracking

  constructor(
    useMock = ApiConfig.useMock,
    postEvent?: (event: string, payload?: any) => void
  ) {
    this.useMock = useMock;
    this.postEvent = postEvent;
  }

  async getUser(): Promise<User> {
    if (this.useMock) {
      await delay(300);
      return MOCK_USER;
    }

    const response = await http.get('auth/me');
    return response.data.data as User;
  }

  async getRestaurants(lat: number, lng: number): Promise<Restaurant[]> {
    if (this.useMock) {
      await delay(400);

      const key = `${lat},${lng}`;
      const mockRestaurants: any =
        MOCK_RESTAURANTS[key as keyof typeof MOCK_RESTAURANTS];

      if (!mockRestaurants) {
        throw new Error('No mock data found for the given coordinates :(');
      } else {
        return transformRestaurant(mockRestaurants);
      }
    }

    const response = await http.get('restaurants', { params: { lat, lng } });
    return transformRestaurant(response.data);
  }
}
