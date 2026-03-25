import React, { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';
import { space } from './spacing';
import { lightColors, darkColors } from './colors';
import { fontSize, fontWeight, lineHeight } from './typography';


const buildTheme = (scheme: 'light' | 'dark') => ({
  colors: scheme === 'light' ? darkColors : lightColors, // Invert the theme for testing purposes: need to revert back to scheme === "dark" ? darkColors : lightColors when done building
  // colors: scheme === 'dark' ? darkColors : lightColors,
  space,
  fontSize,
  fontWeight,
  lineHeight,
  isDark: scheme === 'dark',
});

type Theme = ReturnType<typeof buildTheme>;

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);


export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const [scheme, setScheme] = useState<'light' | 'dark'>(systemScheme);

  const toggleTheme = () =>
    setScheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme: buildTheme(scheme), toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
