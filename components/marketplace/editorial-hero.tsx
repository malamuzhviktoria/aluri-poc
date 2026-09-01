import { Text } from '@/components/ui/text';
import type { EditorialFeature } from '@/data/types';
import { Image, Pressable, View } from 'react-native';

export function EditorialHero({
  feature,
  onPress,
  aspectRatio = 5 / 4,
  showCta = true,
}: {
  feature: EditorialFeature;
  onPress?: () => void;
  aspectRatio?: number;
  showCta?: boolean;
}) {
  return (
    <View className="mx-4 overflow-hidden rounded-md bg-secondary">
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={feature.title}
        style={{ width: '100%', aspectRatio }}>
        {({ pressed }) => (
          <Image
            source={feature.image}
            className={pressed ? 'opacity-90' : ''}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        )}
      </Pressable>

      <View
        style={{ pointerEvents: 'box-none' }}
        className="absolute inset-x-0 bottom-0 flex-row items-end justify-between gap-3 p-4">
        <Text
          numberOfLines={2}
          style={{ fontFamily: 'Anton_400Regular', fontSize: 27, lineHeight: 32 }}
          className="flex-1 uppercase text-primary-foreground">
          {feature.title}
        </Text>
        {showCta && (
          <Pressable
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={feature.cta}
            className="h-10 items-center justify-center rounded-pill bg-primary-foreground px-4 active:opacity-80">
            <Text className="text-[16px] font-medium uppercase text-primary">{feature.cta}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
