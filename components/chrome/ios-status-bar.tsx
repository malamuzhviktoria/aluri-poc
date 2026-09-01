import { Image, View } from 'react-native';

/**
 * Status bar for the web preview only, rendered from an exact provided
 * image asset (not hand-drawn glyphs). Native builds (iOS/Android/Expo Go)
 * already render the real OS status bar — this would only duplicate it
 * there, so it's web-only "device chrome" for the browser preview.
 */

const STATUS_BAR_ASPECT_RATIO = 746 / 96;

export function IOSStatusBar() {
  return (
    <View style={{ width: '100%', aspectRatio: STATUS_BAR_ASPECT_RATIO }}>
      <Image
        source={require('@/assets/chrome/status-bar.png')}
        style={{ width: '100%', height: '100%' }}
        resizeMode="contain"
      />
    </View>
  );
}
