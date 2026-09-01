import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { AUDIENCE_TABS } from '@/data/home';
import type { AudienceTab } from '@/data/types';
import { ICON_SIZE, TOUCH_TARGET } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { Bell, ShoppingBag } from 'lucide-react-native';
import * as React from 'react';
import { Pressable, View } from 'react-native';

function IconButton({ icon, onPress }: { icon: typeof Bell; onPress?: () => void }) {
  const [pressed, setPressed] = React.useState(false);
  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      hitSlop={8}
      style={{ height: TOUCH_TARGET, width: TOUCH_TARGET }}
      className={cn('items-center justify-center rounded-full', pressed && 'bg-secondary')}>
      <Icon as={icon} size={ICON_SIZE.lg} className="text-foreground" />
    </Pressable>
  );
}

export function AudienceSwitcher({
  value,
  onValueChange,
}: {
  value: AudienceTab;
  onValueChange: (value: AudienceTab) => void;
}) {
  return (
    <View className="flex-row items-center justify-between px-4 pb-2.5 pt-7">
      <View className="flex-row items-center gap-4">
        {AUDIENCE_TABS.map((tab) => {
          const active = tab.key === value;
          return (
            <Pressable
              key={tab.key}
              onPress={() => onValueChange(tab.key)}
              className={cn('h-9 items-center justify-center rounded-pill px-4', active && 'bg-[#F4F5F7]')}>
              <Text className={cn('text-[16px]', active ? 'font-semibold text-foreground' : 'font-normal text-muted-foreground')}>
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View className="flex-row items-center gap-1">
        <IconButton icon={Bell} />
        <IconButton icon={ShoppingBag} />
      </View>
    </View>
  );
}
