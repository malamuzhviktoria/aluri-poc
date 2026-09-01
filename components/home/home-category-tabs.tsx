import { Text } from '@/components/ui/text';
import { HOME_CATEGORIES } from '@/data/home';
import type { HomeCategory } from '@/data/types';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Pressable, ScrollView, View } from 'react-native';

function CategoryTabItem({
  label,
  active,
  extraGapAfter,
  onPress,
}: {
  label: string;
  active: boolean;
  extraGapAfter?: boolean;
  onPress: () => void;
}) {
  const [textWidth, setTextWidth] = React.useState(0);

  return (
    <Pressable
      onPress={onPress}
      className={cn('items-center gap-3 pt-1', extraGapAfter && 'mr-2')}>
      <Text
        onLayout={(e) => setTextWidth(e.nativeEvent.layout.width)}
        className={cn(
          'text-[16px]',
          active ? 'font-semibold text-foreground' : 'font-normal text-muted-foreground'
        )}>
        {label}
      </Text>
      <View
        style={active && textWidth ? { width: textWidth * 2 } : undefined}
        className={cn('h-[2px] rounded-pill', active ? 'bg-foreground' : 'w-full bg-transparent')}
      />
    </Pressable>
  );
}

export function HomeCategoryTabs({
  value,
  onValueChange,
}: {
  value: HomeCategory;
  onValueChange: (value: HomeCategory) => void;
}) {
  return (
    <View className="relative">
      <View className="absolute inset-x-4 bottom-0 h-[1px] bg-border" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="px-4">
        <View className="flex-row items-center gap-9">
          {HOME_CATEGORIES.map((category, index) => (
            <CategoryTabItem
              key={category.key}
              label={category.label}
              active={category.key === value}
              extraGapAfter={index === 0}
              onPress={() => onValueChange(category.key)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
