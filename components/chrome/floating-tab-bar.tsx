import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { THEME } from '@/lib/theme';
import type { LucideIcon } from 'lucide-react-native';
import { Bell, Compass, House, PlusCircle, UserRound } from 'lucide-react-native';
import * as React from 'react';
import { Pressable, View } from 'react-native';

/**
 * Reusable global bottom navigation: a floating translucent pill that
 * overlays screen content (rather than reserving layout space like the
 * default tab bar), so every scrollable tab screen must reserve its own
 * bottom padding — see FLOATING_TAB_BAR_CLEARANCE below.
 */

const ROUTE_ICONS: Record<string, LucideIcon> = {
  home: House,
  index: Compass,
  sell: PlusCircle,
  activity: Bell,
  profile: UserRound,
};

// Comfortably clears the pill's own height plus its bottom safe-area
// offset on both the web preview (no safe-area inset) and real iOS
// devices (~34pt home-indicator inset), so scrollable screens never end
// up with their last content hidden underneath the floating bar.
export const FLOATING_TAB_BAR_CLEARANCE = 128;

// Minimal local shape for what this component reads off React Navigation's
// bottom-tabs `tabBar` render-prop — avoids importing `BottomTabBarProps`
// from a package that isn't part of the public dependency tree (expo-router
// vendors its own fork internally).
type FloatingTabBarProps = {
  state: { index: number; routes: { key: string; name: string }[] };
  descriptors: Record<
    string,
    { options: { title?: string; tabBarAccessibilityLabel?: string } }
  >;
  navigation: any;
  insets: { bottom: number };
};

export function FloatingTabBar({ state, descriptors, navigation, insets }: FloatingTabBarProps) {
  return (
    <View
      pointerEvents="box-none"
      style={{ position: 'absolute', left: 16, right: 16, bottom: insets.bottom + 12 }}>
      <View
        className="flex-row items-center rounded-pill border border-border/60 bg-white/70 px-2 py-2 backdrop-blur-xl"
        style={{
          shadowColor: '#14100c',
          shadowOpacity: 0.06,
          shadowRadius: 16,
          shadowOffset: { width: 0, height: 6 },
        }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const focused = state.index === index;
          const IconComp = ROUTE_ICONS[route.name];
          const label = options.title ?? route.name;

          const onPress = () => {
            const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              accessibilityRole="button"
              accessibilityState={{ selected: focused }}
              accessibilityLabel={options.tabBarAccessibilityLabel ?? label}
              className={`flex-1 items-center justify-center gap-1 rounded-2xl py-2.5 ${focused ? 'bg-[#F4F5F7]' : ''}`}>
              <Icon
                as={IconComp}
                size={24}
                color={(focused ? THEME.foreground : THEME.mutedForeground) as string}
                strokeWidth={focused ? 2.25 : 1.75}
              />
              <Text
                className={`text-[11px] ${focused ? 'font-semibold text-foreground' : 'font-normal text-muted-foreground'}`}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
