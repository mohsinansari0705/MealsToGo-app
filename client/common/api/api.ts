import { mocks } from '../constants/mockdata';

export const fetchRestaurants = async (
  lat: number = 37.7749295,
  log: number = -122.4194155
) => {
  return new Promise((resolve, reject) => {
    const key = String(lat) + ',' + String(log);
    const mock: any = mocks[key as keyof typeof mocks];

    if (!mock) {
      reject(new Error('No mock data found for the given coordinates'));
    } else {
      resolve(mock);
    }
  });
};

fetchRestaurants()
  .then((data) => {
    console.log('Fetched restaurants:', data);
  })
  .catch((error) => {
    console.error('Error fetching restaurants:', error);
  });
