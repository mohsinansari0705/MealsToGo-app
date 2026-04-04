import axios from 'axios';
import { ApiConfig } from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ACCESS_TOKEN_KEY = 'access_token';

export const http = axios.create({
  baseURL: ApiConfig.baseUrl,
  timeout: ApiConfig.requestTimeoutMs,
});

http.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = 'Bearer' + token;
  }

  return config;
});
