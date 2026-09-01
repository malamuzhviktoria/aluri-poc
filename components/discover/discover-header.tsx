import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { ICON_SIZE, TOUCH_TARGET } from '@/lib/tokens';
import { Search } from 'lucide-react-native';
import * as React from 'react';
import { Platform, Pressable, View } from 'react-native';

export function DiscoverHeader({
  title = 'Discover',
  onSearchPress,
}: {
  title?: string;
  onSearchPress?: () => void;
}) {
  const [pressed, setPressed] = React.useState(false);

  return (
    <View className="flex-row items-center justify-between px-5 pb-6 pt-8">
      <Text
        style={{
          fontFamily: Platform.select({
            web: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif',
          }),
        }}
        className="text-[28px] font-medium text-foreground">
        {title}
      </Text>
      <Pressable
        onPress={onSearchPress}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel="Search"
        style={{ height: TOUCH_TARGET, width: TOUCH_TARGET }}
        className={`items-center justify-center rounded-full ${pressed ? 'bg-secondary' : ''}`}>
        <Icon as={Search} size={ICON_SIZE.lg} className="text-foreground" />
      </Pressable>
    </View>
  );
}
