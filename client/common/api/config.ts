export const ApiConfig = {
  baseUrl: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000',
  useMock: (process.env.EXPO_PUBLIC_API_URL || 'true') === 'true',
  requestTimeoutMs: 15000,
};

// EXPO_PUBLIC_MOCK_API=true for development with mock data
// EXPO_PUBLIC_MOCK_API=false when backend is ready
