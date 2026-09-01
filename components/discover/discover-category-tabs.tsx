import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { DISCOVER_TABS } from '@/data/discover';
import type { DiscoverTab } from '@/data/types';
import { Pressable, ScrollView, View } from 'react-native';

export function DiscoverCategoryTabs({
  value,
  onValueChange,
}: {
  value: DiscoverTab;
  onValueChange: (value: DiscoverTab) => void;
}) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="px-5">
      <View className="flex-row items-center gap-3">
        {DISCOVER_TABS.map((tab) => {
          const active = tab.key === value;
          return (
            <Pressable
              key={tab.key}
              onPress={() => onValueChange(tab.key)}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
              className={cn('h-9 items-center justify-center rounded-pill px-4', active && 'bg-[#F4F5F7]')}>
              <Text
                className={cn(
                  'text-[17px]',
                  active ? 'font-semibold text-foreground' : 'font-normal text-muted-foreground'
                )}>
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}
