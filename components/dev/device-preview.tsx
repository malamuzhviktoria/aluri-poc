import { IOSStatusBar } from '@/components/chrome/ios-status-bar';
import * as React from 'react';
import { Platform, useWindowDimensions, View } from 'react-native';

/**
 * Constrains every web build (local dev AND production, e.g. the Netlify
 * deployment) to a fixed phone-width viewport, centered on a neutral page
 * background, so it never responsively stretches to the browser's width —
 * this is a mobile-app prototype, not a responsive website.
 *
 * On a large-enough desktop window, dev builds additionally get a
 * decorative iPhone bezel (notch, home indicator, rounded frame) on top of
 * that same fixed-width screen — purely a local convenience for working in
 * a browser, not part of the shipped product.
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
const MIN_WINDOW_WIDTH_FOR_BEZEL = 768;
const OUTER_MARGIN = 96;
const PAGE_BACKGROUND = '#F2F1EE';

export function DevicePreview({ children }: { children: React.ReactNode }) {
  const { width: winW, height: winH } = useWindowDimensions();

  if (Platform.OS !== 'web') {
    return <View style={{ flex: 1 }}>{children}</View>;
  }

  const showBezel = __DEV__ && winW >= MIN_WINDOW_WIDTH_FOR_BEZEL;

  if (!showBezel) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: PAGE_BACKGROUND }}>
        <View
          style={{
            width: SCREEN_WIDTH,
            minWidth: SCREEN_WIDTH,
            maxWidth: SCREEN_WIDTH,
            flex: 1,
            backgroundColor: '#fff',
            overflow: 'hidden',
          }}>
          {children}
        </View>
      </View>
    );
  }

  const outerW = SCREEN_WIDTH + BEZEL * 2;
  const outerH = SCREEN_HEIGHT + BEZEL * 2;
  const scale = Math.min(1, (winW - OUTER_MARGIN) / outerW, (winH - OUTER_MARGIN) / outerH);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: PAGE_BACKGROUND }}>
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
