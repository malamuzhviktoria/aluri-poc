import { IOSStatusBar } from '@/components/chrome/ios-status-bar';
import * as React from 'react';
import { Platform, useWindowDimensions, View } from 'react-native';

/**
 * Development-only iPhone frame for the desktop web preview. Wraps the app
 * so it reads as a physical device while working on it in a browser —
 * purely presentational, not part of the shipped product.
 *
 * Skips the frame entirely (renders children plain, full-bleed) when:
 * - not on web (native already has a real device/simulator frame)
 * - not a dev build (__DEV__ false)
 * - the window itself is already phone-sized (someone previewing on an
 *   actual mobile browser shouldn't see a fake phone around their phone)
 */

const SCREEN_WIDTH = 440;
const SCREEN_HEIGHT = 956;
const BEZEL = 14;
const OUTER_RADIUS = 64;
const SCREEN_RADIUS = 52;
const ISLAND_WIDTH = 126;
const ISLAND_HEIGHT = 37;
const HOME_INDICATOR_WIDTH = 134;
const HOME_INDICATOR_HEIGHT = 5;
const MIN_WINDOW_WIDTH = 768;
const OUTER_MARGIN = 96;

export function DevicePreview({ children }: { children: React.ReactNode }) {
  const { width: winW, height: winH } = useWindowDimensions();
  const showFrame = Platform.OS === 'web' && __DEV__ && winW >= MIN_WINDOW_WIDTH;

  if (!showFrame) {
    return <View style={{ flex: 1 }}>{children}</View>;
  }

  const outerW = SCREEN_WIDTH + BEZEL * 2;
  const outerH = SCREEN_HEIGHT + BEZEL * 2;
  const scale = Math.min(1, (winW - OUTER_MARGIN) / outerW, (winH - OUTER_MARGIN) / outerH);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F2F1EE' }}>
      <View style={{ width: outerW * scale, height: outerH * scale }}>
        <View
          style={{
            width: outerW,
            height: outerH,
            transform: [{ scale }],
            transformOrigin: 'top left',
            backgroundColor: '#0c0c0d',
            borderRadius: OUTER_RADIUS,
            padding: BEZEL,
            shadowColor: '#000',
            shadowOpacity: 0.3,
            shadowRadius: 50,
            shadowOffset: { width: 0, height: 24 },
          }}>
          <View
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT,
              borderRadius: SCREEN_RADIUS,
              overflow: 'hidden',
              backgroundColor: '#fff',
            }}>
            <View style={{ flex: 1 }}>
              <IOSStatusBar />
              <View style={{ flex: 1 }}>{children}</View>
            </View>

            {/* Dynamic Island — decorative overlay, not part of layout flow */}
            <View
              pointerEvents="none"
              style={{
                position: 'absolute',
                top: 11,
                left: SCREEN_WIDTH / 2 - ISLAND_WIDTH / 2,
                width: ISLAND_WIDTH,
                height: ISLAND_HEIGHT,
                borderRadius: ISLAND_HEIGHT / 2,
                backgroundColor: '#000',
              }}
            />

            {/* Home indicator — decorative overlay, not part of layout flow */}
            <View
              pointerEvents="none"
              style={{
                position: 'absolute',
                bottom: 8,
                left: SCREEN_WIDTH / 2 - HOME_INDICATOR_WIDTH / 2,
                width: HOME_INDICATOR_WIDTH,
                height: HOME_INDICATOR_HEIGHT,
                borderRadius: HOME_INDICATOR_HEIGHT / 2,
                backgroundColor: '#000',
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
