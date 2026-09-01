import { DefaultTheme, type Theme } from 'expo-router';

export const THEME = {
  background: 'hsl(0 0% 100%)',
  foreground: 'hsl(20 14% 10%)',
  card: 'hsl(0 0% 100%)',
  cardForeground: 'hsl(20 14% 10%)',
  popover: 'hsl(0 0% 100%)',
  popoverForeground: 'hsl(20 14% 10%)',
  primary: 'hsl(20 14% 10%)',
  primaryForeground: 'hsl(0 0% 100%)',
  secondary: 'hsl(30 14% 94%)',
  secondaryForeground: 'hsl(20 14% 10%)',
  muted: 'hsl(30 14% 94%)',
  mutedForeground: 'hsl(25 6% 45%)',
  accent: 'hsl(30 14% 94%)',
  accentForeground: 'hsl(20 14% 10%)',
  destructive: 'hsl(4 70% 46%)',
  success: 'hsl(142 30% 30%)',
  border: 'hsl(30 12% 88%)',
  input: 'hsl(30 12% 88%)',
  ring: 'hsl(20 14% 10%)',
  radius: '1rem',
} as const;

export const NAV_THEME: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: THEME.background,
    border: THEME.border,
    card: THEME.card,
    notification: THEME.destructive,
    primary: THEME.primary,
    text: THEME.foreground,
  },
};
