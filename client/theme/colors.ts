export const palette = {
  brand: {
    primary: '#2182BD',
    secondary: '#5282BD',
    muted: '#C6DAF7',
  },
  feedback: {
    success: '#22C55E',
    warning: '#F59E0B',
    danger: '#EF4444',
    info: '#3B82F6',
  },
  ui: {
    primary: '#262626',
    secondary: '#757575',
    tertiary: '#F1F1F1',
    quaternary: '#FFFFFF',
    disabled: '#DEDEDE',
  },
  bg: {
    primary: '#FFFFFF',
    secondary: '#F1F1F1',
  },
  text: {
    primary: '#262626',
    secondary: '#757575',
    disabled: '#9C9C9C',
    inverse: '#FFFFFF',
  },
  neutral: {
    50: '#F9F9F9',
    100: '#F1F1F1',
    200: '#E0E0E0',
    500: '#9E9E9E',
    800: '#2C2C2C',
    900: '#111111',
  },
};

export const lightColors = {
  background: palette.bg.primary,
  foreground: palette.bg.secondary,
  // surface: '#FFFFFF',
  textPrimary: palette.text.primary,
  textSecondary: palette.text.secondary,
  textdisabled: palette.text.disabled,
  border: palette.text.disabled,
  primary: palette.brand.primary,
  ...palette.feedback,
};

export const darkColors: typeof lightColors = {
  background: palette.neutral[900],
  foreground: palette.bg.secondary,
  // surface: palette.neutral[800],
  textPrimary: palette.neutral[50],
  textSecondary: palette.neutral[500],
  textdisabled: palette.text.disabled,
  border: palette.neutral[800],
  primary: palette.brand.primary,
  ...palette.feedback,
};
