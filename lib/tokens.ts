import { Platform } from 'react-native';

/**
 * Small shared foundation for values that can't be expressed as Tailwind
 * classNames (icon `size` props, RN `style` shadow objects). Colors,
 * spacing, radii, and type scale live in tailwind.config.js / global.css.
 */

export const ICON_SIZE = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

export const TOUCH_TARGET = 44;

// NativeWind's `shadow-*` utilities are unreliable across platforms for
// elevation-based shadows, so cards use this shared native style instead.
export const CARD_SHADOW = Platform.select({
  ios: {
    shadowColor: '#14100c',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  android: {
    elevation: 3,
  },
  default: {},
});
